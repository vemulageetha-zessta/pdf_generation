const nodemailer = require("nodemailer");
var cron = require("node-cron");

const sendMail = (customer, file) => {
  // e-mail message options
  let mailOptions = {
    from: "geetha.vemula2022@outlook.com",
    to: customer.Email,
    subject: customer.Name + " Due Remainder",
    text: "Your plan validity is expiring soon.Please recharge immediately to enjoy uninterrupted services...",
    attachments: [{ filename: customer.Name + ".pdf", path: file }],
  };

  // e-mail transport configuration
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: "geetha.vemula2022@outlook.com",
      pass: "Geetha@26",
    },
  });

  //Scheduling the mail for every 5 seconds
  cron.schedule("5 * * * * *", () => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Sent: " + info.response);

      return info;
    });
  });
};

module.exports = {
  sendMail,
};
