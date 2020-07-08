var sum = (a, b, callback) => {
    setTimeout(() => {
        let error, result;
        console.log("KQ la:");
        if (typeof a != 'number' || typeof b != 'number') {
            error = 'Argument is not a Number';
            return callback(error, result);
        }
        callback(error, a + b);
    }, 1000);
}

sum(4, 2, (error, result) => {
    if (error)
        console.log("Co loi xay ra!");
    else
        console.log(result);
})

