import { Router } from "express";
import { User } from "../types/user";
import { GetUser,AddnewUser, removeUser } from "../modules/user";


const UserRouter = Router();

UserRouter.get('/:id', GetUser);
UserRouter.post('/', AddnewUser);
UserRouter.delete('/:id', removeUser);

export default UserRouter;