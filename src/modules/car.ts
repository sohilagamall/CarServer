import {car} from "../types/car";
import { Request,Response } from "express";

let cars : car[] =[];
let caridCounter = 1;
export function GetAllCars(req:Request , res:Response ){
    res.status(200).json(cars);
}

export function AddNewCar(req:Request, res:Response){
    const {brand, model, Class} = req.body;
    if(brand!== undefined && model!== undefined && Class!== undefined){
        const newCar: car ={
            brand: brand,
            model: model,
            Class: Class,
            id : caridCounter++
        };

        cars.push(newCar);
        res.status(201).json("Created successfully");
    }
    else
        res.status(404).json({message : "Brand, Model and Class are required"});
};

export function GetCar(req:Request, res:Response){
    const id = parseInt(req.params.id);
    
    if(id === undefined)
        res.status(400).json({message :"Invalid ID format"});
    else{
        const car = cars.find((b)=> b.id === id)
        if(car) res.status(200).json(car);
        else res.status(400).json({message:"car not found"});
    }
}


export function DeleteCar(req:Request, res:Response){
    const id = parseInt(req.params.id);

    if(id === undefined)
        res.status(404).json({message :"Invalid ID format"});
    else{
        const carindex = cars.findIndex((b)=> b.id === id);

        if(carindex !== -1){
            const DeletedCar = cars.splice(carindex,1)[0];
            res.status(200).json({message: "car deleted successfully", car: DeletedCar});
        }
        else res.status(404).json({message:"car not found"});
    }

}