const mongoose = require("mongoose");
const {scripts} = require("./model.js");
let uri = "mongodb://0.0.0.0:27017/details"
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});
const connection = mongoose.connection;

function Datainsert(argument, filepath, countdocument){
connection.once("open", function() {
    console.log("MongoDB connection established successfully");
    insertData(argument,filepath,countdocument);
})
}

insertData = (argument, filepath, countdocument) => {
    let data = [
        {
            time: undefined,
            operation: argument,
            filename: filepath,
            rowscount: countdocument
        }
    ];
    scripts.insertMany(data, function (err, result){
        if (err) {
            console.log("error", err);
        } else {
            console.log(data);
            console.log("results", result);
        }
    });
}
module.exports = {Datainsert}

