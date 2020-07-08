var name = 'Le Manh Dat';

isEmptyString = (str) => {
    return str == null || str == undefined || str.trim().length == 0;
}

console.log(isEmptyString("  "));