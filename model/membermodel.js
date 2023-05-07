

import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const membermodel=mongoose.Schema(
    {
       date:{
        type:Date,
        default:new Date
       }, 
       membershipamount:{
        type:Number,
        default:0
       },
       balance:{
        type:Number,
        default:0
       },
       membershipnumber:
       {
        type:Number
       }
    }
)

autoIncrement.initialize(mongoose.connection);
membermodel.plugin(autoIncrement.plugin, 'membership');
const membership =mongoose.model('membership',membermodel);
export default membership;

