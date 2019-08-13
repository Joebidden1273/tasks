var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yroot'@'localhost'",
  password: "",
  database: "mydb"
});
//Craete a Primary Key on existing table
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table altered");
  });
});