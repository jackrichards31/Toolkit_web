import type { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "@/lib/emailSender";

type Data = {
  message: string;
};

export default async function mailHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    try {
      await sendEmail({ to, subject, text });
      res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to send email!" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed!" });
  }
}
