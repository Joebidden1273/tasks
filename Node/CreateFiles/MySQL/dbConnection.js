var mysql = require('mysql');

var con = mysql.createConnection({
    host:"localhost",
    user:"root'@'localhost'",
    password:"",
    
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!")
//Query DataBase
con.query("SHOW DATABASES", function(err, result){
    if(err) throw err;
    console.log("Result:" + result.affectedRows);
    console.log("Result:" + result.message);
    console.log("Result:" + result);


});
/*//Creating a Database
con.query("CREATE DATABASE joe1",function(err,result){
    if(err) throw err;
    console.log("Database Created!!");

});*/

});