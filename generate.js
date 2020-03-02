var alphletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var betasymb = ["1","2","3","4","5","6","7","8","9","0","<", ">", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "|", "?"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var copyarea = " ";

function generateCode() {

    var userLength = document.getElementById("userlength").value;
    var passwordArr = [];

    // this should generate something?
    var password = "";
    var specialChar = document.getElementById("sp1").checked;
    var upperCase = document.getElementById("cl1").checked;
    var lower = document.getElementById("lc1").checked;
   
    if(specialChar) {
        passwordArr = passwordArr.concat(betasymb);
    
    }

    if(lower) {
        passwordArr = passwordArr.concat(lowerCase);
       
    }
    if (upperCase){
        passwordArr = passwordArr.concat(alphletters);
    }

    for (var i = 0; i < userLength; i++){

        password = password + passwordArr[Math.floor(Math.random() * passwordArr.length)];
    }

 
    document.getElementById("copyArea").value = password;
   
};



function copytoClip() {
    
    document.getElementById("copyArea").select();
    document.execCommand("copy");

  
    console.log(document.getElementById("copyArea").value, "has been copied");

}
generateCode();