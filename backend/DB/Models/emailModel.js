//importing the mongoose library to define the schema as it's easier to create a schema using the mongoose library
const mongoose = require('mongoose');

//we define the schema as EmailSchema 
const emailSchema = new mongoose.Schema({
    //sender email is the single email that will be sending the email to the list of users
    senderEmail: {
        type: String,
        required: true
    },
    //reciever email is the list of users the email will be sent to
    receiverEmail: {
        type: [String],
        required: true
    },
    //subject email is the subject of the email
    subjectEmail: {
        type: String,
        required: true
    },
    //body email is the body of the email
    bodyEmail: {
        type: String,
        required: true
    },
}, //by enabling this or setting the timesstamps as true we would be able to have the created and edited at in our database
  {
    timestamps: true
});

// Create the model in a varibale to export it and reuse it to declare and save in our database throughout our code
const EmailModel = mongoose.model('Email', emailSchema);

//exporting the created variable
module.exports = EmailModel
