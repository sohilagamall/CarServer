import { interest } from "../types/interests";
import { User } from "../types/user";
import { car } from "../types/car";
import { Request, Response } from "express";
let interests : interest[] =[];
let users: User[]=[];

export function addUserInterest(req: Request,res: Response){
    const userID = parseInt(req.body.userID);
    const carID =parseInt(req.body.carID)
    const user = users.find((b)=> b.id === userID);
    if(user){
        const newinterest : interest = {
            userID:userID ,
            carID  : carID
        }
        interests.push(newinterest);
        res.status(200).json({message:"Interest added"});
    }
    else
        res.status(404).json({message: "Invalid ID"});
}


export function GetAllInterests(req:Request, res:Response){
    const userid = parseInt(req.params.id);

    if(userid === undefined)
        res.status(400).json({message:"invalide ID format"});

    const UserInterest = interests.filter((b)=> b.userID === userid);
    res.status(200).json(UserInterest);

}