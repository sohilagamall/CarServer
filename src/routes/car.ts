import { Router } from "express";
import { car } from "../types/car";
import { GetAllCars, GetCar,DeleteCar, AddNewCar } from "../modules/car";

const CarRouter = Router();

CarRouter.get('/',GetAllCars );
CarRouter.post('/', AddNewCar);
CarRouter.delete('/:id', DeleteCar);
CarRouter.get('/:id', GetCar);

export default CarRouter;