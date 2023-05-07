
import express from "express";
import {Connection} from "./db/db.js";
import Routes from './router/router.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extented:true}));
app.use(cors());
app.use('/',Routes);
const PORT =8000;

Connection();
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})