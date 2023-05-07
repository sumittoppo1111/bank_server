
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

const whitelist=["https://bankclient.onrender.com","http://bank-client-qm9s5kspc-sumittoppo1111.vercel.app","https://bank-client-five.vercel.app"]

const corsOptions={
    origin:function (origin,callback){
        if (whitelist.indexOf(origin)!==-1) {
            callback(null,true)
    }else{
        callback(new Error('Not allowed by CORS'));
    }
    }
}

app.use(cors(corsOptions));
const PORT =process.env.PORT || 8000;
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

Connection(username,password);
app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})