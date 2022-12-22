// Assignment code here


/*created function called generatePassword passing in 'password' as an arguement.
the conditional is parsing the string into an integer and checking to see
if the number being given by the user meets the criteria of being longer than 8 
characters and shorter than 128
*/
function generatePassword(password){
  var passwordPrompt = window.prompt("Please enter number of characters", "");
  // var min= 8;
  // var max= 128;

  if( parseInt(passwordPrompt) < 8 || parseInt(passwordPrompt) > 128){
    window.alert("Please choose a number between 8-128")
    generatePassword()
  }else if (!passwordPrompt){
    window.alert("Goodbye!")
  }else{
    window.alert("thank you")
  }
  // if (parseInt(passwordPrompt) > min && parseInt(passwordPrompt) < max){
  //   alert('Accepted');
  // }
  //  else {
  //   alert('Please choose a number between 8 and 128');
  //   generatePassword();
  // }


  // while ((parseInt(passwordPrompt) < min && parseInt(passwordPrompt) > max)){
  // generatePassword();
  // if (parseInt(passwordPrompt) > min && parseInt(passwordPrompt) < max){
  //   alert('Accepted');
  // }
  //  else {
  //   alert('Please choose a number between 8 and 128');
  // }
}


// do {
//   generatePassword()
// } while((parseInt(passwordPrompt) >! min && parseInt(passwordPrompt) <! max));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
