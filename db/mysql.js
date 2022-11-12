var mysql = require('mysql');

var db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Thufeil123",
    database: "food_journal"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
module.exports=db
