"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interest_1 = require("../modules/interest");
const InterestRouter = (0, express_1.Router)();
InterestRouter.get('/', interest_1.GetAllInterests);
InterestRouter.post('/:id', interest_1.addUserInterest);
exports.default = InterestRouter;
