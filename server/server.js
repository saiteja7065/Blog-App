const exp = require("express");
const app = exp();
require('dotenv').config();//process.env
const mongoose = require("mongoose");
const userApp = require("./APIs/userAPI");
const authorApp = require("./APIs/authorAPI");
const adminApp = require("./APIs/adminAPI");
const connectDB = require('./config/db');
const cors = require('cors'); // Add this line

const port = process.env.PORT || 4000;

// Enable CORS
app.use(cors()); // Add this line

//db connection
connectDB()
    .then(() => {
        app.listen(port, () => console.log(`server listening on port ${port}..`))
        console.log("DB connection success")
    })
    .catch(err => console.log("Error in DB connection ", err))

//body parser middleware
app.use(exp.json())
//connect API rouites
app.use('/user-api',userApp)
app.use("/author-api",authorApp)
app.use('/admin-api',adminApp)