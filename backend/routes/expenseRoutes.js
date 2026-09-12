const express = require("express");
const router = express.Router();
const {getExpenses,addExpense,deleteExpense,updateExpense} = require("../controllers/expenseController")


//Get - expense page
router.get("/api/expenses",getExpenses)

//Post - add a new expense
router.post("/api/expenses",addExpense)

//Put - update an expense
router.put("/api/expenses/:id",updateExpense)

//Delete
router.delete("/api/expenses/:id",deleteExpense)

module.exports = router;