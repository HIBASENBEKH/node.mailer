const nodemailer = require('nodemailer');

// Create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hibasenbekhc@gmail.com', 
    pass: 'onih haiz lvfo jqvz' 
  }
});

// Email details
const mailOptions = {
  from: 'hibasenbekhc@gmail.com',
  to: 'mu.hashirpk@gmail.com', 
  subject: 'Hello Friend!',
  text: 'This is a test email sent from Node.js using nodemailer.'
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
