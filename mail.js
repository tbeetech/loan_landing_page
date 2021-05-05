const nodemailer = require('nodemailer');
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key:'d819d35db09946719db3c6c51af271c9-28d78af2-e6632f20',
        domain:'mail.69unlockers.com'
    }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {

    const mailOptions = {
        from: email,
        to: 'tobirammar@gmail.com',
        subject: subject,
        text: text
    
    }
    
    transporter.sendMail(mailOptions, function(err, data){
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    });


}

module.exports = sendMail;