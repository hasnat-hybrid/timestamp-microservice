const validator = require('validator');

const date = (date) => {
    return new Date(date)
}

const valid = (num) => {
    if (validator.isNumeric(num.toString())) {
        return true;
    }
    return false;
}

module.exports = {valid, date}