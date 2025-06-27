import  type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function authMiddleware(req:Request, res:Response, next:NextFunction){
    const header = req.headers.authorization!

    try{

        let data = jwt.verify(header, process.env.JWT_SCRETE!);
        req.userId = data.sub as string
        next()

    }catch(e){
        res.status(403).json("token invalid")
    }
}