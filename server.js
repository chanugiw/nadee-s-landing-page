import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@nadeesenanayake.com';

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, status: 'healthy' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Name, email, and message are required.',
    });
  }

  if (!smtpHost || !smtpUser || !smtpPass) {
    return res.status(500).json({
      error: 'Email backend is not configured. Add SMTP_HOST, SMTP_USER, and SMTP_PASS to the environment.',
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: smtpUser,
      to: recipientEmail,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `New website enquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New website enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    };

    const result = await transporter.sendMail(mailOptions);

    return res.status(200).json({
      ok: true,
      messageId: result.messageId,
      status: 'sent',
      message: 'Email sent successfully.',
    });
  } catch (error) {
    console.error('Email send failed:', error);

    return res.status(500).json({
      error: error?.message || 'Failed to send email.',
    });
  }
});

app.listen(port, () => {
  console.log(`Email backend running on http://localhost:${port}`);
});
