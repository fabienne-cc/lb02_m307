// check if firstname and lastname is valid
function checkName(firstname) {
    if (checkRequired(firstname)) {
        if (firstname.length >= 3 && firstname.length <= 15) {
            return true;
        }
    }
    return false;
}
// check if email matches pattern
function checkEmail(email) {
    if (checkRequired(email)) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email.trim())) {
            return true;
        }
    }
    return false;
}

// check if  phone number has 
function checkMobile(mobile) {
    if (checkRequired(mobile)) {
        if (mobile.length === 13) {
            return true;
        }
    }
    return false;
}

// check if password is not empty and has minimum length of 4 and max length of 30
function checkPassword(password) {
    if (checkRequired(password)) {
        if (password.length >= 6 && password.length <= 30) {
            return true;
        }
    }
    return false;
}

// check if gender is sir, mam or else
function checkGender(gender) {
    if (checkRequired(gender)) {
        if (gender == 'Sir' || gender == 'Mam' || gender == 'Else') {
            return true;
        }
    }
    return false;
}

// check if input value has text
function checkRequired(input) {
    if (input.trim() === '') {
        return false;
    }
    return true;
}

module.exports = {
    checkName,
    checkEmail,
    checkMobile,
    checkPassword,
    checkGender
}
