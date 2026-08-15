const { Resend } = require("resend");
const dotenv = require("dotenv");

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Eventora <onboarding@resend.dev>";

const sendBookingEmail = async (userEmail, userName, eventTitle) => {
    try {
        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [userEmail],
            subject: `Booking Confirmed: ${eventTitle}`,
            html: `
                <h2>Hi ${userName}!</h2>
                <p>
                    Your booking for the event 
                    <strong>${eventTitle}</strong> 
                    is successfully confirmed.
                </p>
                <p>Thank you for choosing Eventora.</p>
            `
        });

        if (error) {
            console.error("Resend booking email error:", error);
            throw new Error(error.message);
        }

        console.log("Booking email sent successfully:", data.id);

    } catch (error) {
        console.error("Error sending booking email:", error);
        throw error;
    }
};

const sendOTPEmail = async (userEmail, otp, type) => {
    try {
        const title =
            type === "account_verification"
                ? "Verify your Eventora Account"
                : "Eventora Booking Verification";

        const msg =
            type === "account_verification"
                ? "Please use the following OTP to verify your new Eventora account."
                : "Please use the following OTP to verify and confirm your event booking.";

        const { data, error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [userEmail],
            subject: title,
            html: `
                <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
                    
                    <h2 style="color: #111;">
                        ${title}
                    </h2>

                    <p style="color: #555; font-size: 16px;">
                        ${msg}
                    </p>

                    <div style="
                        margin: 20px auto;
                        padding: 15px;
                        font-size: 24px;
                        font-weight: bold;
                        background: #f4f4f4;
                        width: max-content;
                        letter-spacing: 5px;
                    ">
                        ${otp}
                    </div>

                    <p style="color: #999; font-size: 12px;">
                        This code expires in 5 minutes.
                        If you didn't request this, please ignore this email.
                    </p>

                </div>
            `
        });

        if (error) {
            console.error("Resend OTP error:", error);
            throw new Error(error.message);
        }

        console.log(`OTP sent to ${userEmail} for ${type}`, data.id);

    } catch (error) {
        console.error("Error sending OTP email:", error);
        throw error;
    }
};

module.exports = {
    sendBookingEmail,
    sendOTPEmail
};