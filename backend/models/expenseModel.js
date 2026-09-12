const mongoose = require("mongoose")

const expenseSchema = mongoose.Schema({
    id:Number,
    title:String,
    amount:Number,
    category:String
})

const Expense = mongoose.model("Expense",expenseSchema)

module.exports = Expense