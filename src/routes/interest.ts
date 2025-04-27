import { Router } from "express";
import { interest } from "../types/interests";
import { addUserInterest, GetAllInterests } from "../modules/interest";

const InterestRouter = Router();

InterestRouter.get('/', GetAllInterests);
InterestRouter.post('/:id', addUserInterest);

export default InterestRouter;