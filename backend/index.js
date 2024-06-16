//importing the neccessary functions, libraries and environmental variables to make app run
const express = require('express')
const app = express()
const cors = require("cors")
const {sendEmailController, getUsers } = require("./controllers/emailController")
const ConDB = require("./DB/ConDB.js")
const port = process.env.PORT || 3001
require("dotenv").config()
app.use(cors())
app.use(express.json())

//we declared the routes in the index.js as theres only one route but we will be sending two type of requests on the same route
app.post("/", sendEmailController) //this will send the email
app.get("/", getUsers) //this will send the number of users in the env

//the mongodb connection function
ConDB()

//making the app listen on a specified port and then console.log
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})