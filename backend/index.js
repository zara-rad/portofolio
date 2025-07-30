import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.post("/api/contact", async (req, res) => {
    const { name, email, message, token } = req.body;

    if (!name || !email || !message || !token) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: `"${name}" <${email}>`,
            subject: `New Contact Message from ${name}`,
            text: `You received a new message from your portfolio:
          
          Name: ${name}
          Email: ${email}
          Message:
          ${message}`,
            html: `
              <h3>New Contact Message</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
            `,
        };


        await transporter.sendMail(mailOptions);

        res.json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Email failed to send" });
    }
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
