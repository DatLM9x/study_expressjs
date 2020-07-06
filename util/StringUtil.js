module.exports = {
    isEmpty: (str) => {
        return (!str || 0 === str.length || str == undefined || str == null)
    }
};