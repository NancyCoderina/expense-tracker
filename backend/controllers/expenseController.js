const Expense = require("../models/expenseModel")

const addExpense = async(req,res)=>{
   const {title,amount,category} = req.body

   const expense = new Expense({
    title,amount,category
})
await expense.save()

res.status(201).json(expense)
}


const getExpenses = async(req,res)=>{
    const expenses = await Expense.find()
    res.json(expenses)
}

const deleteExpense = async(req,res)=>{
    const id = req.params.id;
    const expense = await Expense.findByIdAndDelete(id)

    if(!expense){
        return res.status(404).json({
        message:"Expense not found"});
        }

        res.json({
            message:"Expense deleted successfully"
        })
}

const updateExpense = async(req,res)=>{
    const {id} = req.params;
    const {title,amount,category} = req.body
    const expense = await Expense.findById(id)

    if(!expense){
        return res.status(404).json({
            message:"Expense not found!"
        })
    }
    const updatedExpense = await Expense.findByIdAndUpdate(id,{
        title,amount,category
    },{new:true})
     res.json(updatedExpense)
}

module.exports = {getExpenses,addExpense,deleteExpense,updateExpense}
