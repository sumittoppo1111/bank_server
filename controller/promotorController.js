
import Promotor from "../model/promotormodel.js";


export const addpromotor=async(req,res)=>
{
    const pro=req.body;
    

    const newpro=new Promotor(pro);
    try{
        await newpro.save();
      
        
        res.status(201).json(newpro);
    }
    catch(error)
    {
        res.status(409).json({message:error.message});
    }
    
}