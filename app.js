const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const userRoute = require('./routes/UserRoute');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

var dbOptions = {
    host:"localhost",
    port:3306,
    user:"root",
    password:"123456",
    database:"hello"
}

app.use(myConnection(mysql,dbOptions,'pool'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use('/user',userRoute);

app.listen(port, (error) => {
    let d = new Date();
    console.log("Build success: " + d.toTimeString());
    if (error) {
        console.log("Đã có lỗi xảy ra");
    }
});




