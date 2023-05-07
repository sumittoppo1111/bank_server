
import Finnancial from "../model/finnalcial.js"

export const addfinnancial=async(req,res)=>
{
    const fin=req.body;
   

    const newfin=new Finnancial(fin);
    try{
        await newfin.save();
      
        
        res.status(201).json(newfin);
    }
    catch(error)
    {
        res.status(409).json({message:error.message});
    }
    
}