const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const router = require('./routes/tasks');
const app = express();
const path = require("path");
require('dotenv').config();


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

app.use(express.urlencoded({ extended: true }));

mongoose.connect(`${process.env.MONGO_URI}`, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', router);

app.set("port", process.env.PORT || 3000);
const server = app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:
    ${app.get("port")}`);
});


// => Here we expose your dist folder
app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));