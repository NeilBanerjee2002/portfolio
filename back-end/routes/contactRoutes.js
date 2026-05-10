import express from "express";
import rateLimit from "express-rate-limit";
import { Resend } from "resend";

const router = express.Router();

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,

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

router.post(
    "/",
    contactLimiter,
    mandatoryFieldsCheck,

    async (req, res) => {

        const { name, email, message } = req.body;

        try {

            const resend = new Resend(process.env.RESEND_API_KEY);

            const data = await resend.emails.send({

                from: "Portfolio <onboarding@resend.dev>",

                to: process.env.EMAIL_USER,

                replyTo: email,

                subject: `Portfolio Contact from ${name}`,

                html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
    `
            });



            return res.status(200).json({
                success: true,
                message: "Email sent successfully"
            });

        } catch (error) {



            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
);

export default router;