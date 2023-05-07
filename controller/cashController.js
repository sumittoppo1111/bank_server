import Cash from '../model/cashModel.js'
export const addcash = async (req, res) => {
  const [lastRecord, b] = await Cash.find({}).sort({ _id: -1 }).limit(1)
  let balance = Number(lastRecord.balance)
  console.log(lastRecord)
  console.log(balance)
  let transactionType = req.body.transactiontype;
  let newBalance;
  let amount = Number(req.body.amount)
  if (transactionType == 'withdraw') {
    newBalance = lastRecord.balance - amount
  }else if (transactionType == 'deposit') {
    newBalance = Number(req.body.amount)+lastRecord.balance;
  }  
  else {
    if (Number(req.body.shareamount) == 0) {
      newBalance = Number(balance) + Number(req.body.amount)
    } else {
      newBalance =
        Number(balance) +
        Number(req.body.shareamount) +
        Number(req.body.membershipamount)
    }
  }

  console.log(newBalance)
  req.body.balance = newBalance
  const cash = req.body
  console.log(req.body)
  const newcash = new Cash(cash)
  try {
    await newcash.save()
    res.status(201).json(newcash)
  } catch (error) {
    console.log(error)
    res.status(409).json({ message: error.message })
  }
}

export const getcash = async (req, res) => {
  try {
    const cash = await Cash.find({})
    res.status(200).json(cash)
  } catch (error) {
    res.status(404).json({ message: error.res.data })
  }
}
