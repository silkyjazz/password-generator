// Assignment code here

//setting my character variables to contain all the letters, numbers, and characters 
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '~`!@#$%^&*()_-+={[}]|:;">/';

//
function generatePassword(passwordText){
  /*setting passwordChoices to an empty string because i am going to change 
  this variable later to include character criteria*/
  var passwordChoices = ''
  var password =''
  
  //Prompting the user to give me a number
  var passwordPrompt = window.prompt("Please enter number of characters", "");
  
  //parse the string to an integer and testing that the number meets min of 8 and max of 128. if not, reprompt user
  //if user clicks cancels, alert the user
  if( parseInt(passwordPrompt) < 8 || parseInt(passwordPrompt) > 128){
    window.alert("Please choose a number between 8-128")
    generatePassword()
  }else if (!passwordPrompt){
    window.alert("Goodbye!")
  }

  var isUppercase = window.confirm("Do you want Uppercase?")
  var isLowercase = window.confirm("Do you want Lowercase?")
  var isNumbers = window.confirm("Do you want Numbers?")
  var isSpecialChar = window.confirm("Do you want special characters?")

  if(isUppercase){
    passwordChoices = passwordChoices + alphaUpper
  }
  if (isLowercase){
    passwordChoices = passwordChoices + alphaLower
  }
  if (isNumbers){
    passwordChoices = passwordChoices +  numbers
  }
  if (isSpecialChar){
    passwordChoices = passwordChoices + specialChar
  }

  for (let index = 0; index < parseInt(passwordPrompt); index++) {
    const randomElement = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    password = password + randomElement
  } 
 if (!isUppercase && !isLowercase && !isSpecialChar && !isNumbers ){
    alert("Please choose at least 1 criteria. Try again")
    passwordText.value = ""
  }
  return password;


} 

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
