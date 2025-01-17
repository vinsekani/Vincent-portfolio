const nodemailer = require('nodemailer');

// Create a reusable transporter object using Gmail
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "vinsekani@gmail.com",  // your Gmail address
    pass: "aylp afvf ryhu ppsa", // your App Password
  },
});

// Setup email data
const mailOptions = {
  from: '"Test" <vinsekani@gmail.com>', // sender address
  to: "recipient-email@example.com", // list of receivers
  subject: "Test Email", // Subject line
  text: "This is a test email.", // plain text body
  html: "<b>This is a test email.</b>", // HTML body content
};

// Send email and log the result
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
