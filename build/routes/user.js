"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../modules/user");
const UserRouter = (0, express_1.Router)();
UserRouter.get('/:id', user_1.GetUser);
UserRouter.post('/', user_1.AddnewUser);
UserRouter.delete('/:id', user_1.removeUser);
exports.default = UserRouter;
