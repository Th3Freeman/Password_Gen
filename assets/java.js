alert("Answer the prompts to generate a password. If you choose an invalid number of characters a valid number will be chosen at random. If you dont any attributes then it assumes you couldnt decide and will enable everything.")
var charNum = prompt("How long would you like your password? Select a number between 8 and 128.")
var specialChar = confirm("Would you like any special characters?")
var upperCase = confirm("Would you like any Uppercase Letters?")
var lowerCase = confirm("Would you like any Lowercase Letters?")
var numbers = confirm("Would you like any Numbers?")
var feedBack = [charNum, specialChar, upperCase, lowerCase, numbers]

console.log(feedBack)

// while(charNum<8 || charNum>128) {
//     charNum = prompt("ERROR: How long would you like your password? Select a number between 8 and 128.")
// }

// if(7<charNum<129) {
//     break;
// }


if (charNum > 128) {
    charNum = Math.floor(Math.random() * 128) + 8
}

else if (charNum < 8) {
    charNum = Math.floor(Math.random() * 128) + 8
}

else if (7 < charNum < 129) {
    charNum = charNum
}

else {
    charNum = Math.floor(Math.random() * 128) + 8
};

if (specialChar) {
    var specials = "!@#$%^&*()_=+"
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

if (specials + uppers + lowers + nums === "") {
    var randos = "!@#$%^&*()_=+ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
}

else {
    randos = ""
};



function makeid(charNum) {
    var result = '';
    var characters = specials += uppers += lowers += nums += randos;
    var charactersLength = characters.length;
    for (var i = 0; i < charNum; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(charNum));

function generator() {
    document.getElementById("password_output").innerHTML = makeid(charNum);
    console.log(makeid(charNum));
}

function clipBoard() {
    var copyText = document.getElementById("password_output");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Password Copied");
}
