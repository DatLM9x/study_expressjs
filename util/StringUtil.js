module.exports = {
    isEmptyString: (str) => {
        return (!str || 0 === str.trim().length || str == undefined || str == null)
    }
};