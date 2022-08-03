// Assignment code here

//create a varible for numbers, letters, and special charchters
var alpha=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
var alphaLower=("abcdefghijklmnopqrstuvwxyz");
var numbers=("1234567890");
var special=("!@#$%^&*=+<>?");
var selected=""
//Abiility to click 'generate password button'
function generatePassword(){
   var lengthInput=window.prompt("What is the length of your password?(min is 8)");
   if (lengthInput < 8){
    window.alert("Length of password is too short")
    return 
   }
   if (lengthInput > 128){
    window.alert("Length of password is too long")
    return
   }
   var lowerCase=window.confirm("Include lowercase letter? (ok for yes, cancel for no)")
   console.log(lowerCase)
   var upperCase=window.confirm("include uppercase letters? (ok for yes, cancel for no)")
   var numeric= window.confirm("Include numbers? (ok for yes, cancel for no)")
   var characters=window.confirm("Include special characters? (ok for yes, cancel for no)")
   if(lowerCase==true){
    selected=selected+alphaLower
   } 
   if(upperCase==true){
    selected=selected+alpha
   }
   if (numeric==true){
   selected=selected+numbers
   }
   if (characters==true){
    selected=selected+special
   }
   console.log (selected)
   var mystr=""
   for (let i = 0; i < lengthInput; i++) {
    var randomchar=selected.charAt(Math.floor(Math.random()*selected.length))
    mystr=mystr+randomchar
   }
   return mystr
}
//   *When button is pressed, window prompt opens
//   *Window prompts for password crit
//When all prompts are answered, password generated to fit selected crit as alert/or in box
var generateBtn = document.querySelector("#generate")

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
