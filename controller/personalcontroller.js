
import Personal from "../model/personal.js";
export const addpersonal=async(req,res)=>
{
    const per=req.body;
    

    const newper=new Personal(per);
    try{
        await newper.save();
      
        
        res.status(201).json(newper);
    }
    catch(error)
    {
        res.status(409).json({message:error.message});
    }
    
}