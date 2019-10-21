alert("Answer the prompts to generate a password. If you leave a prompt blank that value will be randomly be chosen")
var charNum = prompt("How long would you like your password? Select a number between 8 and 128")
var specialChar = confirm("Would you like any special characters?")
var upperCase = confirm("Uppercase Letters?")
var lowerCase = confirm("Lowercase Letters?")
var numbers = confirm("Numbers?")

var feedBack = [charNum, specialChar, upperCase, lowerCase, numbers]

console.log(feedBack)

if (specialChar) {
    var specials = "!@#$%^&*()_+"
}

else {
    specials = ""
}

if (upperCase) {
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

else {
    uppers = ""
}



function makeid(charNum) {
    var result = '';
    var characters = specials+uppers;
    var charactersLength = characters.length;
    for (var i = 0; i < charNum; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(charNum));