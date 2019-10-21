alert("Answer the prompts to generate a password. If you choose an invalid number of characters a valid number will be chosen at random. If you dont any attributes then it assumes you want everything.")
var charNum = prompt("How long would you like your password? Select a number between 8 and 128.")
var specialChar = confirm("Would you like any special characters?")
var upperCase = confirm("Uppercase Letters?")
var lowerCase = confirm("Lowercase Letters?")
var numbers = confirm("Numbers?")
var feedBack = [charNum, specialChar, upperCase, lowerCase, numbers]

console.log(feedBack)

if (charNum>128) {
    charNum = Math.floor(Math.random() * 128) + 8
}

else if (charNum<8) {
    charNum = Math.floor(Math.random() * 128) + 8
}

else if (7<charNum<129) {
    charNum=charNum
}

else {
    charNum = Math.floor(Math.random() * 128) + 8
};

if (specialChar) {
    var specials = "!@#$%^&*()_+"
}

else {
    specials = ""
};

if (upperCase) {
    var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

else {
    uppers = ""
};

if (lowerCase) {
    var lowers = "abcdefghijklmnopqrstuvwxyz"
}

else {
    lowers = ""
};

if (numbers) {
    var nums = "0123456789"
}

else {
    nums = ""
};

// if (specials="", uppers="", lowers="",nums="") {
//     var randos="!@#$%^&*()_+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
// }

// else {
//     randos=""
// };



function makeid(charNum) {
    var result = '';
    var characters = specials+uppers+lowers+nums;
    var charactersLength = characters.length;
    for (var i = 0; i < charNum; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(charNum));

function generator() {
    document.getElementById("password_output").innerHTML = makeid(charNum);
  }