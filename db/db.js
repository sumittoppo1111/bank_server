
import mongoose from 'mongoose';
 export const Connection=async()=>{
    const URL =`mongodb+srv://sumit:sumit123@nidhibankingsystem.fw5ypia.mongodb.net/BANKINGSYSTEM?retryWrites=true&w=majority`;
    try {
        mongoose.set('strictQuery',false);
        mongoose.connect(URL,{useUnifiedTopology:true, useNewUrlParser:true});
        console.log("database connected successfully");
    }
    catch(error)
    {
        console.log("error while connecting database",error);
    }
}


