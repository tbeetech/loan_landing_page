const nodemailer = require('nodemailer');
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key:'key-12e3e5b69927fb2f1d59b035d075b126',
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