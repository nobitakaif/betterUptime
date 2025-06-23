import express from "express"
import { client } from "db/client"
const app = express()

app.get("/", (req, res)=>{
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

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running on port 8000`)
})