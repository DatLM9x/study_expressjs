const router2 = (app) =>{
    app.get('/users',(req,res) =>{
        res.send({
            name:"LM Dat",
            age:24
        });
    });

    app.get('/teacher',(request, response)=>{
        response.send({
            name:"Thao",
            school:"Le Loi hight school"
        });
    });
}

module.exports = router2;

