
import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const accountmodel = mongoose.Schema({
    accountopenningdate:{
        type:String,
    },
    bankname:{
        type:String,
    },
    companyaccount:{
        type:Number,
    },
    IFSC:{
        type:String,
    },
    accountactive:{
        type:String,
    },
    useforprinter:{
        type:String,
    }
})
autoIncrement.initialize(mongoose.connection);
accountmodel.plugin(autoIncrement.plugin, 'bankAccount');
const account =mongoose.model('bankAccount',accountmodel);
export default account;