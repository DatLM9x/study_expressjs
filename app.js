const express = require('express');
const con = require('./modules/connectSQL');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
const userRoute = require('./routes/user');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

/*app.get('/user', (request, response) => {
    let ID = request.query.id;

    let rd;
    let sql = "SELECT * FROM user WHERE id = ?";
    con.query(sql, [ID], (err, result) =>{
        if(err) throw err;
        response.send(result[0]);
        response.end();
    });
});

app.post("/user",(req,res)=>{
    console.log("");
    let sql = "INSERT INTO user (username , password)" +
        "VALUES (?,?)";

    con.query(sql,[req.body.username, req.body.password],(err, result)=>{
        if(err) throw err;
        res.send("INSERT OK");
        res.end();
    })
})*/


userRoute(app);

app.listen(port, (error) => {
    let d = new Date();
    console.log("Build success: " + d.toTimeString());
    if (error) {
        console.log("Đã có lỗi xảy ra");
    }
});

