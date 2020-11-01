// global variables
// spcial characters
var specialCharArray = [",""<"".""/"">""?""=""+""_""-"")""(""*""&""^""%""$""#""@""!""`""~"";"":"]
// lowercase characters
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase characters
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// number characters 
var numberArray = ["1", "2", "3", "4", "5", "6," "7", "8", "9", "0"];




// prompt - how many characters
var passLengthAns = prompt ("How many characters do you want your password to be?");
// prompt - do you want special characters t/f
var specialCharAns = confirm ("Do you want special characters?");
// prompt - do you want numbers t/f
var numberAns = confirm ("Do you want numbers?");
// prompt - do you want lowercase t/f
var lowerCaseAns = confirm ("Do you want lowercase characters?");
// prompt - do you want uppercase t/f
var upperCaseAns = confirm ("Do you want uppercase characters?");






// then return password into form




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
