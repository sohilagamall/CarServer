import express from "express";
import UserRouter from "./routes/user"; 
import CarRouter from "./routes/car";
import InterestRouter from "./routes/interest"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user", UserRouter);
app.use('/car', CarRouter );
app.use('/interest', InterestRouter);

app.listen(port,()=>{
    console.log(`server is running at port : ${port}`);
})

