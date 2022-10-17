/*
Name: Primitive
Author: Cristiliano Júnior
Linkedin: cristilianojr

Description: This module has many functions to identify, through strings, their primitive types.

functions:
    @isInteger
    @isFloat
    @isBinary
    @isAlphabetic
    @isAlphaNumeric
    @isUpper
    @isLower
    @isCapitalize
    @isASCII
    @isSpace    
*/


function isInteger(value) {
    /*
    This function receives a string and check if their char pattern are just only numbers.

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!((charCode >= 48 && charCode <= 57))) {
            return false
        }
    }
    return true
}

function isFloat(value) {
    /*
    This function receives a string and check if their char pattern has numbers and just one dot.

    #value : string
    */
    var counteOccurrences = (value, simbol) => {
        let counter = 0
        
        for (char in value) {
            if (value[char] == simbol) {
                counter += 1
            }
        }
        return counter
    }

    if (!(counteOccurrences(value, '.') == 1)) {
        return false
    }

    if (!(value.charCodeAt(0) >= 48 && 
          value.charCodeAt(0) <= 57 &&
          value.charCodeAt(value.length - 1) >= 48 && 
          value.charCodeAt(value.length - 1) <= 57)) {
        return false
    }

    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 48 && charCode <= 57 || charCode == 46)) {
            return false
        }
    }
    return true
}


function isBinary (value) {
    /*
    This function receives a string and check if their char pattern has only 1 or 0.

    #value : string
    */
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
    /*
    This function receives a string and checks if its char pattern belongs to the alphabet.

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122)) {
            return false
        }
    }
    return true
}

function isAlphabeticPhase (value) {
    /*
    This function receives a string and checks if its char pattern belongs to the alphabet and are separeted by white spaces.

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 65 && charCode <= 90) && 
            !(charCode >= 97 && charCode <= 122) &&
            !(charCode == 32)) {
            return false
        }
    }
    
    return true
}

function isAlphaNumeric (value) {
    /*
    This function receives a string and checks if its char pattern belongs to the alphabet (a-z A-Z) and 0-9.

    #value : string
    */
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
    /*
    This function receives a string and checks if char pattern are all uppercase.

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 65 && charCode <= 90)) {
            return false
        }
    }
    return true
}


function isLower (value) {
    /*
    This function receives a string and checks if char pattern are all lowercase.

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode >= 97 && charCode <= 122)) {
            return false
        }
    }
    return true
}

function isCapitalize (value) {
    /*
    This function receives a string and checks if first letter are uppercase.

    #value : string
    */
    if (!(value.charCodeAt(value[0]) >= 65 && value.charCodeAt(value[0]) <= 90)) {
       return false 
    }
    return true
}

function isASCII (value) {
    /*
    This function receives a string and checks if their char pattern belongs to ASCII list

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)
        
        if (!(charCode >= 0 && charCode <= 127)) {
            return false
        }
    }
    return true
}

function isSpace (value) {
    /*
    This function receives a string and checks if their char pattern are all white spaces

    #value : string
    */
    for (char in value) {
        var charCode = value.charCodeAt(char)

        if (!(charCode == 32 && !value.length == 0)) {
            return false
        }
    }
    return true
}
