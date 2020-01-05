// Router
const router1 = app => {
    app.get('/a', (request, response) => {
        response.send({
            message: request.query.sms+" "+request.query.content
        });
        response.end();
    });

    app.post('/postmethod', (request, response) => {
        let body = request.body;
        console.log(body instanceof Object);
        console.log(JSON.stringify(body));
        response.end();
    });

    app.post('/m/:name/:address', (request, response) => {
        let body = request.params;
        response.write("AAAA");
        response.end();
    });
}

// Export the router
module.exports = router1;