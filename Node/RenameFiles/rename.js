var fs = require('fs');
fs.rename('mynewfile1.txt','myrenamedfile.text',function(err){
    if(err) throw err;
    console.log('File Renamed');

});