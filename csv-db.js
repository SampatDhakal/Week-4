var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/";
const fs = require('fs');
var args = process.argv[2];
let file = process.argv[3];
module.exports= {csvtojson,json2csv}

 function csvtojson(csv) {
    let result = [];
    var lines = csv.replace(/\r/g, "").split("\n");
    var headers;
    headers = lines[0].split(",");
    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        if (lines[i] == undefined || lines[i].trim() == "") {
            continue;
        }
        var words = lines[i].split(",");
        for (var j = 0; j < words.length; j++) {
            obj[headers[j].trim()] = words[j];
        }
        result.push(obj);
    }
    return result;
}

 function json2csv(json){
    let csv = '';
    csv = [
       [
           "name",
           "address",
           "dob"
       ],
       ...json.map(item => [
           item.name,
           item.address,
           item.dob
       ])
   ]
       .map(e => e.join(","))
       .join("\n");
       return csv
   }
   
if (args === 'write') {
    const data = fs.readFileSync(file, 'utf8');
    csvtojson(data)

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("userdb");
        dbo.createCollection("users", function (err) {
            if (err) throw err;
            let myobj = result;
            dbo.collection("users").insertMany(myobj, function (err) {
                if (err) throw err
                db.close();
            });
        });
    }); 
}

else if (args === 'read') {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("userdb");
        dbo.collection("users").find({}).toArray(function (err, result) {
            if (err) throw err;
            console.log(result)
            json2csv(result)
            fs.writeFile(file, csv, err => {
                if (err) {
                    console.error(err);
                }
            });
            db.close();
        });
    });
}

else {
    console.log('Enter csv-db.js to write or read')
}

