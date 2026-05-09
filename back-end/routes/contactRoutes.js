import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";


const router = express.Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // limit each IP to 5 requests per window
    message: {
        success: false,
        message: "Too many requests. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

router.post("/", contactLimiter, async (req, res) => {

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact from ${name}`,
            html: `
                <h2>New Portfolio Message</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `
        });

        res.status(200).json({
            success: true,
            message: "Email sent successfully"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to send email"
        });
    }
});

export default router;