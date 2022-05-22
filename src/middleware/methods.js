const validator = require('validator');

const dateUTC = (unix) => {
    return new Date(parseInt(unix)).toUTCString()
}

const valid = (num) => {
    if (validator.isNumeric(num.toString())) {
        return true;
    }
    return false;
}

module.exports = {valid, dateUTC}