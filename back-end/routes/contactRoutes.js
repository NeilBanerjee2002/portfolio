import express from "express";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";


const router = express.Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,

    standardHeaders: 'draft-7',
    legacyHeaders: false,

    handler: (req, res) => {

        return res.status(429).json({
            success: false,
            message: "Too many requests. Please try again later."
        });
    }
});

const mandatoryFieldsCheck = (req, res, next) => {

    const { name, message, email } = req.body || {};

    if (
        !name?.trim() ||
        !message?.trim() ||
        !email?.trim()
    ) {
        return res.status(400).json({
            success: false,
            message: "Missing mandatory fields: name/email/message"
        });
    }

    next();
};
router.post("/", contactLimiter, mandatoryFieldsCheck, async (req, res) => {

    const { name, email, message } = req.body;

    try {

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 10000
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            replyTo: email,
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

        console.error("MAIL ERROR:", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

export default router;