
import Account from "../model/accountmodel.js"

export const account =async(req,res)=>
{
  const accountdetails=req.body;
  console.log(accountdetails);
  const newaccountdetails= new Account(accountdetails);
  try{
    await newaccountdetails.save();
    res.status(201).json(newaccountdetails);
  }
  catch(error)
  {
    console.log(error)
    res.status(409).json({ message: error.message })
  }
}

export const getaccount=async(req,res)=>
{
    try{
        const getaccountdetails= await Account.find();
        res.status(200).json(getaccountdetails);
    }
    catch(error){
        console.log(error);
        res.status(404).json({message:error.message})
    }
}