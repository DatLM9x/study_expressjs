var express = require('express');
var router = express.Router();
// var userController = require('../controller/UserController');
router.get("/getbyid", (req, res) => {
    let id = req.query.id;
    res.send(id)
    res.end();
});

router.get("/getbyname", (req, res) => {
    let name = req.query.name;
    res.send(name);
    res.end();
});
module.exports = router;