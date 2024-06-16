//importing libraries, database models and neccessary credentials from the environmental variables
require("dotenv").config()
const nodemailer = require("nodemailer");
const EmailModel = require("../DB/Models/emailModel");
const SenderEmail = process.env.SENDER_EMAIL;
const SenderEmailPass = process.env.SENDER_PASS;
const ReceiverEmails = process.env.RECIEVER_LIST.split(',');

//declaring the nodemailer createtransport in a variable and passing Sender email and sender email's password as object for auth that we will be using to send email
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: SenderEmail,
        pass: SenderEmailPass,
    },
});

//the send emain function that will be sending the email and also saves the email in the database before sending it
const SendEmail = async (emailDetails) => { // Accept emailDetails as parameter

    try {
        //saves in database
        const newEmail = new EmailModel({
            senderEmail: SenderEmail,
            receiverEmail: ReceiverEmails,
            subjectEmail: emailDetails.subject,
            bodyEmail: emailDetails.text,
        });
        const savedEmail = await newEmail.save();
        console.log('Email saved to the database:', savedEmail);

        //sending the email with neccessary credentials
        const info = await transporter.sendMail({
            from: SenderEmail,
            to: ReceiverEmails,
            subject: emailDetails.subject,
            text: emailDetails.text,
        });

        console.log("Message sent: %s", info.messageId);
    } catch (error) {
        //basic error handling
        console.error("Error sending email:", error);
        throw error;
    }
};
// controllers/emailController.js

//we will be sending the email with users input that will be sent as a request in the server, we will use the subject and the main body will be text
const sendEmailController = async (req, res) => {
    try {
        await SendEmail(req.body); // Pass the req.body to the SendEmail function
        res.status(200).send("Email sent successfully");
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send("Error sending email");
    }
};

//we made a simple function and that count the number of emails in the env file and sends it to the frontend and we use it to show the number of users email will be sent to
const getUsers = (req, res) => {
    res.json(ReceiverEmails.length);
}

//exporting the 2 functions
module.exports = {sendEmailController, getUsers};