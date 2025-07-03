import express, { type Request, type Response } from "express"
import { client } from "db/client"
import jwt from "jsonwebtoken"
import { createSigninSchema, createSignupSchema } from "./type"
import bcrypt, { hash } from "bcrypt"
import { authMiddleware } from "./middleware"


const app = express()
app.use(express.json())

app.get("/", (req:Request, res:Response)=>{
    res.status(200).json({
        msg:"everything is fine"
    })
    return 
})

app.post('/getuser', async (req,res)=>{
    const resposne = await client.user.create({
        data:{
            username:"nobitakaif",
            password:"nobitakaif"
        }
    })
    res.status(200).json({
        id : resposne.id
    })
    return 
})

app.post('/user/signup',async (req,res)=>{
    const user = createSignupSchema.safeParse(req.body)

    if(!user.success){
        res.status(411).json({
            msg:"something went wrong",
            error: user.error
        })
        return 
    }

   try{
        const hashedPassword = await bcrypt.hash(user.data.password,5)
        
        const resposne = await client.user.create({
            data:{
                username:user.data.username,
                password:hashedPassword
            }
        })
        res.status(200).json({
            id:resposne.id
        })
        return 
        
   }catch(e){
        res.status(401).json({
            error: "this username is already exist"
        })
   }
    
})

app.post('/user/signin',async (req,res)=>{
    const user = createSigninSchema.safeParse(req.body)
    
    if(!user.success){
        res.status(411).json({
            msg: "please give us your credential",
            error: user.error
        })
        return
    }

    const resposne = await client.user.findFirst({
        where:{
            username:user.data.username
        }
    })

    if(!resposne?.id){
        res.status(403).json({
            msg:"uesr is not present"
        })
        return 
    }

    const hashedPassword = await  bcrypt.compare(user.data.password, resposne.password)

    if(!hashedPassword){
        res.status(403).json({
            msg:"incorrect password"
        })
        return 
    }

    const token = jwt.sign({
        sub:resposne.id
    },process.env.JWT_SCRETE!)
    
    res.status(200).json({
        token : token
    })
    return 
})

app.post('/website', authMiddleware, async (req,res)=>{
    if(!req.body.url){
        res.status(411).json({
            msg:"url is not present"
        })
        return 
    }

    const website = await client.website.create({
        data:{
            url: req.body.url,
            timeAdded: new Date(),
            userId:req.userId! 
        }
    })

    res.status(200).json({
        msg:"alright",
        id: website.id
    })
    return 
})

app.post("/status/:website",authMiddleware, async (req,res)=>{

    const website = await client.website.findFirst({
        where:{
            userId:req.userId,
            id:req.params.website
        },
        include:{
            ticks:{
                orderBy:[{
                    createdAt:"desc" 
                }],
                take: 1 // take only latest one tick
            }
        }
    })

    if(!website){
        res.status(409).json({
            msg:"not found"
        })
        return 
    }

    res.status(200).json({
        website:website
    })
    return 
})

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running on port 8000`)
})