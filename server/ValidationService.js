const validationLib = require('./ValidationLib')

// check every attribute of user object
function validateUser(user) {
    if (!validationLib.checkGender(user.gender)) {
        return false;
    }
    if (!validationLib.checkName(user.firstname)) {
        return false
    }
    if (!validationLib.checkName(user.lastname)) {
        return false
    }
    if (!validationLib.checkName(user.firstname)) {
        return false;
    }
    if (!validationLib.checkName(user.lastname)) {
        return false;
    }
    if (!validationLib.checkEmail(user.email)) {
        return false;
    }
    if (!validationLib.checkMobile(user.mobile)) {
        return false;
    }
    if (!validationLib.checkPassword(user.password)) {
        return false;
    }
    return true;
}


module.exports = {
    validateUser
}
