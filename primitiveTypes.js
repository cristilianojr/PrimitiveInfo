
function isNumeric (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!((charCode >= 48 && charCode <= 57))) {
            return false
        }
    }
    return true
}

function isAlphaNumeric (value) {
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 48 && charCode <= 57) &&
            !(charCode >= 65 && charCode <= 90) &&
            !(charCode >= 97 && charCode <= 122))  {
                return false
        }
    }
    return true
}


