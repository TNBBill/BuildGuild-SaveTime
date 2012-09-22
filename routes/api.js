exports.api = function(req, res){
	var nodemailer = require("nodemailer");
	var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "rangerraza@gmail.com",
        pass: "ZaQ1XsW2CdE3"
    }
	});
	// setup e-mail data with unicode symbols
	var mailOptions = {
	    from: "Bill Centinaro <bill@theresnobox.net>", // sender address
	    to: "bill@theresnobox.net, kristi@theresnobox.net", // list of receivers
	    subject: "Hello", // Subject line
	    text: "Hello world", // plaintext body
	    html: "<b>Hello world</b>" // html body
	};
	smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    //smtpTransport.close(); // shut down the connection pool, no more messages
	});
	res.send('true');
}  