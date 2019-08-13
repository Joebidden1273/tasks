var nodemailer = require('nodemailer');
 var transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user:'joebidden1273@gmail.com',
         pass:'Bidden1273'

     }
 });

 var mailOptions = {
     from: 'joebidden1273@gmail.com',
     to:  'karanja.joseph@ekenya.co.ke',
     subject:'Sending email using Node.js',
     text: 'That was easy!'
 };

 transporter.sendMail(mailOptions,function(error, info){
     if(error){
         console.log(error)
     } else{
         console.log('Email sent:' +info.response);
     }

 });

