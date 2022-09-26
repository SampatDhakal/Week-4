const mongoose = require("mongoose")

const Schema = mongoose.Schema(
    {
        time: { 
            type : Date, default: Date.now },
        operation: {
            type: String
        },
        filename:{
            type: String
        },
        rowscount: {
            type: Number
        }
    },
    { collection: "script" }
);

const scripts = mongoose.model("scripts", Schema)
module.exports = {scripts}

