const express = require('express');
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
// const expressValidator = require("express-validator")
dotenv.config();

const PORT = process.env.PORT || 8080;



//Database
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database Connected."));


mongoose.connection.on('error', err => {
    console.log("DB connection error : ", err.message);
})


//bring in routes
// const postRoutes = require('./routes/post')
const postRoutes = require('./routes/post')


// //Own Middleware
// const myOwnMiddleware = (req, res, next) => {
//     console.log("Middleware is running!!!!");

//     //Use to move forward instead of stuck here
//     next();
// }

//Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
// app.use(expressValidator());


//Use OwnMiddleware
// app.use(myOwnMiddleware);

app.use("/", postRoutes);

app.listen(PORT, () => console.log(
    "API Listerning on Port:", PORT
));