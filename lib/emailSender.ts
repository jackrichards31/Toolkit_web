import nodemailer from "nodemailer";

interface EmailOptionProps {
  to: string;
  subject: string;
  text: string;
}

export const sendEmail = async (options: EmailOptionProps) => {
  const transporter = nodemailer.createTransport({
    service: "Outlook365", // using Outlook365 service
    auth: {
      user: process.env.OUTLOOK_USER, // Your Outlook email address.
      pass: process.env.OUTLOOK_PASS, // Your Outlook email password or app-specific password
    },
  });

  const mailOptions = {
    from: process.env.OUTLOOK_USER,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email send successfully!");
  } catch (err) {
    console.log(err);
  }
};
