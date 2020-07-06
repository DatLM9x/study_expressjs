var express = require('express');
var userRouter = express.Router();
var userController = require('../controller/UserController');

userRouter.get("/getbyid", userController.getbyid);

userRouter.get("/getbyname", userController.getbyname);
module.exports = userRouter;