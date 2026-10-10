// Vercel serverless function: POST /api/contact
// Same behaviour as server.js, but runs on Vercel (no Express server needed).
// Required environment variables (Vercel > Project > Settings > Environment Variables):
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL
import nodemailer from 'nodemailer';

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body || {};
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }
  if (!EMAIL_PATTERN.test(email) || name.length > 200 || email.length > 320 || message.length > 5000) {
    return res.status(400).json({ error: 'Please check your name, email and message and try again.' });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@nadeesenanayake.com';

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
      auth: { user: smtpUser, pass: smtpPass },
    });

    const result = await transporter.sendMail({
      from: smtpUser,
      to: recipientEmail,
      replyTo: email,
      subject: `Website enquiry from ${name.replace(/[\r\n]+/g, ' ')}`,
      text: `New website enquiry\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New website enquiry</h3>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ ok: true, messageId: result.messageId, status: 'sent' });
  } catch (error) {
    console.error('Email send failed:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again or email directly.' });
  }
}

function safeParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}
