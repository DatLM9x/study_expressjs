const con = require('../modules/connectSQL');

const userRoutes = (app)=>{
    app.get("/user",(req,res) =>{
        let id = req.query.id;
        let r;
        let sql ="SELECT * FROM user WHERE id = ?";
        con.query(sql,[id],(err, result)=>{
            if(err)
                throw err;
            res.send(result);
            r = result;
            console.log(r);
            res.end();
        });

        console.log(r);
    });

    app.post("/user",(req, res)=>{
        let body = req.body;
        let sql = "INSERT INTO user(username, password) VALUES (?,?)";

        con.query(sql,[body.username, body.password],(err, result) =>{
            if(err) throw err;
            let sql2 = "SELECT * FROM user ORDER BY id DESC LIMIT 0,1";
            con.query(sql2,[],(err, result)=>{
                res.send(result);
            });
        });
    });
}

module.exports = userRoutes;