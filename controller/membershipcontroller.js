
import Member from "../model/membermodel.js"

export const membership =async(req,res)=>
{
    const member=req.body;
    const a=await Member.find({}).sort({_id:-1}).limit(1);
    let amount;
    a.map(h=>{
   amount=h.balance;
    })
    console.log(typeof(amount))
    req.body.balance=amount+Number(req.body.membershipamount);
    console.log(req.body.balance);
    const newmember=  new Member(member);

    try{
        await newmember.save();
      
        
        res.status(201).json(newmember);
    }
    catch(error)
    {
        res.status(409).json({message:error.message});
    }
}

export const getmembershipno =async(req,res)=>
{
    try
    {
        const cash=await Member.find({}).sort({_id:-1}).limit(1);;
        res.status(200).json(cash);
    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    }
}