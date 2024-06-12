const mongoose = require("mongoose")
const schema = mongoose.Schema(
    {
        "name":{type:String,require:true},
        "admno":{type:String,require:true},
        "class":{type:String,require:true},
        "mark":{type:String,require:true},
        "grade":{type:String,require:true}
    }
)

let resultmodel = mongoose.model("results",schema)
module.exports = {resultmodel}
