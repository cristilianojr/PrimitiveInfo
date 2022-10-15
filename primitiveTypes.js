
function isNumeric (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!((charCode >= 48 && charCode <= 57))) {
            return false
        }
    }
    return true
}

function isBinary (value) {
    var checkNumber = false
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode == 48 || charCode == 49 || charCode == 32)) {
            return false
        } else {
            checkNumber = true
        }
    }
    return true
}

function isAlphabetic (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122)) {
            return false
        }
    }
    return true
}

function isAlphaNumeric (value) {
    var checkAlphaNumeric = {alphabetic: false, numeric: false}

    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 48 && charCode <= 57) &&
            !(charCode >= 65 && charCode <= 90) &&
            !(charCode >= 97 && charCode <= 122)) {
                return false
        } else if (charCode >= 48 && charCode <= 57) {
            checkAlphaNumeric.numeric = true
        } else {
            checkAlphaNumeric.alphabetic = true
        }

    }

    if (!(checkAlphaNumeric.alphabetic == true && checkAlphaNumeric.numeric == true)) {
        return false
    } else {
        return true
    }
}

function isUpper (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if ((charCode >= 97 && charCode <= 122)) {

            return false
        }
    }
    return true
}


function isLower (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if ((charCode >= 65 && charCode <= 90)) {

            return false
        }
    }
    return true
}

function isCapitalize (value) {
    if (!(value.charCodeAt(value[0]) >= 65 && value.charCodeAt(value[0]) <= 90)) {
       return false 
    }
    return true
}

function isASCII (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)
        
        if (!(charCode >= 0 && charCode <= 127)) {
            return false
        }
    }
    return true
}
