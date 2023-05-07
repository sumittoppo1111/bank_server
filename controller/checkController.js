

import Cheque from "../model/chequeOnlineModel.js";

export const addChequeOnline =async(req,res)=>
{
    
    

    const [lastRecord,b]=await Cheque.find({}).sort({_id:-1}).limit(1);
    // let k,s;
    // let j;
    // a.map(h=>{
    // k= h.balance;
    
    // });
     let transactionType=req.body.transactiontype;
    

    
    // {j=(s=="withdraw"?(k-Number(req.body.amount)):Number(req.body.shareamount)==0?(k+Number(req.body.amount)):(k+Number(req.body.shareamount)+Number(req.body.membershipamount)))};
 let newBalance;
 if(transactionType=="withdraw")
 {
    newBalance=Number(lastRecord.balance)-Number(req.body.amount);
 }
 else if(transactionType=="deposit")
 {
    newBalance=Number(lastRecord.balance)+Number(req.body.amount);
 }
 else{
    newBalance =
        Number(lastRecord.balance) +
        Number(req.body.shareamount) +
        Number(req.body.membershipamount);
 }
    console.log(newBalance);
    req.body.balance=newBalance;
    const cheque=req.body;
    const newcheque =new Cheque(cheque);
    try{
        await newcheque.save();
        res.status(201).json(newcheque);
    }
    catch(error)
    {
        res.status(409).json({message:error.message});
    }
}


export const getcheque=async(req,res)=>
{
    try{
        const cheque=await Cheque.find({});
        res.status(200).json(cheque);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}

// export const getautomatically=async(req,res)=>
// {
//     try{
//         const result=await Cheque.find
//     }
// }