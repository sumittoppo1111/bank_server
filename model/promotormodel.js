

import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const promotormodel =mongoose.Schema(
    {
     gender:{
        type:String
     } ,
     firstName:{
        type:String
     },
     middleName:{
        type:String
     },
     lastName:{
        type:String,
     },
     date:{
        type:String
     } ,
     fatherName:{
        type:String,
     },
     motherName:{
        type:String,
     },
     email:{
        type:String,
     },
     mobile:{
        type:Number,
     },
     aadhar:{
        type:Number
     },
     pan:{
        type:Number
     },
     voter:{
        type:Number
     },
     ration:{
        type:Number
     },
     martial:{
        type:String
     },
     areal:{
      type:String
     },
     Landmark:{
      type:String,
     },
     post:{
      type:String
     },
     dist:{
      type:String
     },
     state:{
      type:String
     },
     pincode:{
      type:Number
     },
     spouse:{
      type:String
     }

    }
)

autoIncrement.initialize(mongoose.connection);
promotormodel.plugin(autoIncrement.plugin, 'promotor');
const promotor =mongoose.model('promotor',promotormodel);
export default promotor;