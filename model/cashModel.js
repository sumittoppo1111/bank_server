
import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const cashModel = mongoose.Schema(
    {
        transactiontype:
        {type:String,
         default:"deposit"
        },
        accounttype:{
            type:String,
            default:"saving"
        },
        accountnumber:{
            type:Number,
            default:null
        },
        amount:{
           type:Number,
           default:0
        },
        transactiondate:{
            type:Date,
            default:new Date()
        },
        paymode:{
            type:String,
            default:"cash"
        },
        particular:{
            type:String,
            default:""
        },
        balance:{
            type:Number,
            default:0
        },
        shareamount:{
            type:Number,
            default:0
        },
        membershipamount:{
            type:Number,
            default:0
        },
        membershipnumber:{
            type:Number,
            default:0
        }
       
        
        
        
    
        
    
    
    } 
)
autoIncrement.initialize(mongoose.connection);
cashModel.plugin(autoIncrement.plugin, 'cash');
const cash =mongoose.model('cash',cashModel);
export default cash;
