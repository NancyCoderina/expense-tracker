const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const cors = require("cors")

dotenv.config({
    path: path.join(__dirname, ".env")
})

const connectDB = require("./config/db")
const expenseRoutes = require("./routes/expenseRoutes")


const app = express()

app.use(cors())
app.use(express.json())
app.use(expenseRoutes)

app.get("/test",(req,res)=>{
    res.send("Server is working")
})

connectDB()

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running!!")
})












