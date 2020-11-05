

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

alert("Click the generate password button to begin!")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  passwordText.innerHTML = "";
  // User clicks generatePassword button
  var passLengthAns = prompt ("How many characters do you want your password to be?");
  passLengthAns = Math.floor(passLengthAns);
  console.log(passLengthAns);

  // User picks less than 8 or more than 128
  if (passLengthAns < 8 || passLengthAns > 128) {
      alert("Error: password must be between 8 and 128 characters long.");
      return "";
  }



// global variables - arrays
// main array
var mainArray = [];
// spcial characters
var specialCharArray = [",""<"".""/"">""?""=""+""_""-"")""(""*""&""^""%""$""#""@""!""`""~"";"":"]
// lowercase characters
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase characters
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// number characters 
var numberArray = ["1", "2", "3", "4", "5", "6," "7", "8", "9", "0"];


// variables - prompts
// prompt - do you want special characters t/f
var specialCharAns = confirm ("Do you want special characters?");
// prompt - do you want numbers t/f
var numberAns = confirm ("Do you want numbers?");
// prompt - do you want lowercase t/f
var lowerCaseAns = confirm ("Do you want lowercase characters?");
// prompt - do you want uppercase t/f
var upperCaseAns = confirm ("Do you want uppercase characters?");



