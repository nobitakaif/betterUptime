import express from "express"

const app = express()

app.get("/", (req, res)=>{
    
    res.status(200).json({
        msg:"everything is fine"
    })
})

app.listen(process.env.PORT || 8000 ,()=>{
    console.log(`server is running on port 8000`)
})