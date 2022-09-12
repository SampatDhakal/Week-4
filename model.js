import mongoose from 'mongoose';
mongoose.connect("mongodb://0.0.0.0:27017/users")

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