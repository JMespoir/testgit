import dotenv from "dotenv";
import express from 'express';
import router from './routes/index.js';
// import { swaggerUi, specs } from "./swagger.js";
const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use("/api.docs",swaggerUi.serve, swaggerUi.setup(spec));

app.use('/',router);


app.listen(PORT,()=>{
    console.log(`Start Server!!`);
});