exports.userController = (req, res) => {
    req.getConnection((error, conn) => {
        if (!conn) {
            res.sendStatus(404);
            res.end();
            return;
        } else
            res.sendStatus(200).send("connect to userController success");
    })
};