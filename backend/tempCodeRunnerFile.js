const express = require("express")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config({
    path: path.join(__dirname, ".env")
})

const connectDB = require("./config/db")
const expenseRoutes = require("./routes/expenseRoutes")


const app = express()

app.use(express.json())
app.use(expenseRoutes)

connectDB()

app.listen(3000,()=>{
    console.log("Server is running!!")
})
