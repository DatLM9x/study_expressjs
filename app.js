const express = require('express');
const bodyParser = require('body-parser');
const StringUtil = require('./util/StringUtil');
const port = 3000;
const app = express();
const userRoute = require('./routes/UserRoute');

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

/*app.get('/user', (request, response) => {

    response.send(StringUtil.isEmpty("LALALALA"));
    response.end();

});*/



