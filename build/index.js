"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const car_1 = __importDefault(require("./routes/car"));
const interest_1 = __importDefault(require("./routes/interest"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/user", user_1.default);
app.use('/car', car_1.default);
app.use('/interest', interest_1.default);
app.listen(port, () => {
    console.log(`server is running at port : ${port}`);
});
