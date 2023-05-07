
import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const chequeOnline = mongoose.Schema({
 transactiontype:
 {
    type:String,
    default:"deposit"
},
 accounttype:{
    type:String,
    default:"saving"},
 accountnumber:{
   type: Number,
   default:123
 },
 //membership:Number,
 amount:
 {
    type:Number,
    default:0
},
 transactiondate:
 {
    type:String,
    default:new Date()
},
 paymode:{
   type:String
},
 balance:{
   type:Number
},
 selectedaccountno:{
   type:Number
},
 bankname:{
   type:String},
 particular:
 {type:String},
 shareamount:{
   type:Number,
   default:0
},
membershipamount:{
   type:Number,
   default:0
 
},
balance:{
   type:Number,
   
},
companyaccount:{
   type:Number
},
membershipnumber:{
   type:Number,
   default:0
}
 
 
 
})
autoIncrement.initialize(mongoose.connection);
chequeOnline.plugin(autoIncrement.plugin, 'chequeOrOnline');
const chequeOrOnline=mongoose.model(`chequeOrOnline`,chequeOnline);
export default chequeOrOnline;