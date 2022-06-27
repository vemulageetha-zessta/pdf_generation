const nodemailer = require("nodemailer");

// e-mail message options
let mailOptions = {
    from: 'geetha.vemula1@outlook.com',
    to: 'geetha.vemula@zessta.com',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Your plan validity is expiring soon.Please recharge immediately to enjoy uninterrupted services...',
    attachments: [{ filename: 'HTMLandPDF.pdf', path: './HTMLandPDF.pdf' }],
};

// e-mail transport configuration
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'geetha.vemula1@outlook.com',
    pass: 'Geetha@26',
  },
});

transporter.sendMail(mailOptions, (err,info) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Sent: '+ info.response);
})