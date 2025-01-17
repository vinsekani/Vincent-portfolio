// import emailjs from "@emailjs/browser";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { name, email, message } = req.body;
//   // Only allow POST requests
//   if (req.method !== "POST") {
//     return res.status(405).json({ success: false, error: "Method not allowed." });
//   }

//     if (!name || !email || !message) {
//       return res.status(400).json({ success: false, error: "All fields are required." });
//     }
//   const { name, email, message } = req.body;
//   // Validate required fields
//   if (!name || !email || !message) {
//     return res.status(400).json({ success: false, error: "All fields are required." });
//   }

//     try {
//       const serviceId = process.env.EMAILJS_SERVICE_ID;
//       const templateId = process.env.EMAILJS_TEMPLATE_ID;
//       const publicKey = process.env.EMAILJS_PUBLIC_KEY;
//   try {
//     // Ensure environment variables are set
//     const serviceId = process.env.EMAILJS_SERVICE_ID;
//     const templateId = process.env.EMAILJS_TEMPLATE_ID;
//     const publicKey = process.env.EMAILJS_PUBLIC_KEY;

//       if (!serviceId || !templateId || !publicKey) {
//         throw new Error("EmailJS environment variables are not set.");
//       }
//     if (!serviceId || !templateId || !publicKey) {
//       return res
//         .status(500)
//         .json({ success: false, error: "EmailJS environment variables are not configured." });
//     }

//       const emailParams = {
//         from_name: name,
//         from_email: email,
//         message,
//       };
//     // Prepare email parameters
//     const emailParams = {
//       from_name: name,
//       from_email: email,
//       message,
//     };

//       await emailjs.send(serviceId, templateId, emailParams, publicKey);
//     // Send email via EmailJS
//     const response = await emailjs.send(serviceId, templateId, emailParams, publicKey);

//       return res.status(200).json({ success: true, message: "Message sent successfully!" });
//     } catch (error: any) {
//       console.error("EmailJS error:", error.message);
//       return res.status(500).json({ success: false, error: "Failed to send message." });
//     }
//   } else {
//     return res.status(405).json({ success: false, error: "Method not allowed." });
//     console.log("EmailJS Response:", response);
//     return res.status(200).json({ success: true, message: "Message sent successfully!" });
//   } catch (error: any) {
//     console.error("EmailJS Error:", error.message || error);
//     return res.status(500).json({ success: false, error: "Failed to send the message." });
//   }
// }