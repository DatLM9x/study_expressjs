module.exports = {
    isEmptyJson: (obj) => {
        return !Object.keys(obj).length > 0;
    }
};