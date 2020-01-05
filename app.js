const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const port = 8000;
const routes = require('./routes/routes');
const rt = require('./routes/personroutes');
const app = express();

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "gateway",
    timeout: 100000
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);
rt(app);

con.connect(err=>{
    if(err) throw err;
    console.log("Ket noi thanh cong !");
})

app.get('/user', (request, response) => {
    let ID = request.query.id;
    let rd;
    let sql = "SELECT * FROM user WHERE id = ?";
    con.query(sql, [ID], (err, result) =>{
        if(err) throw err;
        response.send(result[0]);
        response.end();
    });
});

app.listen(port, (error) => {
    let d = new Date();
    console.log("Build success: " + d.toTimeString());
    if (error) {
        console.log("Đã có lỗi xảy ra");
    }
});
