import type { NextApiRequest, NextApiResponse } from "next";
import emailjs from "@emailjs/browser";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    // Ensure environment variables are set
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return res
        .status(500)
        .json({ success: false, error: "EmailJS environment variables are not configured." });
    }

    // Prepare email parameters
    const emailParams = {
      from_name: name,
      from_email: email,
      message,
    };

    // Send email via EmailJS
    const response = await emailjs.send(serviceId, templateId, emailParams, publicKey);

    console.log("EmailJS Response:", response);
    return res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error: any) {
    console.error("EmailJS Error:", error.message || error);
    return res.status(500).json({ success: false, error: "Failed to send the message." });
  }
}
