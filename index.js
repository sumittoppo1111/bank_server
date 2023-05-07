
import express from "express";
import dotenv from "dotenv";
import {Connection} from "./db/db.js";
import Routes from './router/router.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app=express();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extented:true}));

app.use('/',Routes);

dotenv.config();

// const whitelist=["https://bankclient.onrender.com","http://bank-client-qm9s5kspc-sumittoppo1111.vercel.app","https://bank-client-five.vercel.app"]

const corsOptions={
    
    origin:"https://bankclient.onrender.com",
    
}

app.use(cors(corsOptions));

// app.use(function(req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "*");
//     const allowedOrigins = ["http://localhost:3000","https://bankclient.onrender.com","http://bank-client-qm9s5kspc-sumittoppo1111.vercel.app","https://bank-client-five.vercel.app"];
//     const origin = req.headers.origin;
//     if (allowedOrigins.includes(origin)) {
//          res.setHeader('Access-Control-Allow-Origin', origin);
//     }
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     res.header("Access-Control-Allow-credentials", true);
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
//     next();
//   });
const PORT =process.env.PORT || 8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})