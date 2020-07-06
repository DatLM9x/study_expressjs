const jsonUtil = require('../util/JsonUtil');

exports.getbyid = (req, res) => {
    let id = req.query.id;
    req.getConnection((error, conn) => {
        if (!conn) {
            res.status(404).send("ERROR");
            return;
        }
        conn.query('SELECT * FROM user WHERE ID = ?', [id], (error, rows) => {
            if (error || jsonUtil.isEmptyJson(rows)) {
                console.log(error);
                res.status(403).json({'message': error});
            } else {
                res.status(200).send(rows);
            }
        })
    });
}

exports.getbyname = (req, res) => {
    let name = req.query.name;
    res.send({id: 100, name: name});
    res.end();
}