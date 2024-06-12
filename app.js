const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const { resultmodel } = require("./models/result")

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://ardra:ardrac1543@cluster0.tehzzbx.mongodb.net/resultdb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req,res)=>{
    let input = req.body
    let result = new resultmodel(input)
    result.save()
    console.log(result)
    res.json({status:"done"})
})


app.get("/view",(req,res)=>{
    resultmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8080,()=>{
    console.log("server started")
})