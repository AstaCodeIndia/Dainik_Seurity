const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      // text: `Mr./Mrs.${name} wants ${subject} service./n His email is ${email} and Phone no. ${phone}. /n He/She describes that ${message}`,
      html: `
            <h1>New Enquiry Alert!!</h1>
            </br>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number:</strong> ${phone}</p>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };

    await transporter.sendMail(mailOptions);
    // res.json({ status: 'Email sent successfully!' });
    console.log({ status: 'Email sent successfully!' })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
    
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
