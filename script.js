// Assignment code here

//setting my character variables to contain all the letters, numbers, and characters 
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '~`!@#$%^&*()_-+={[}]|:;">/';


function generatePassword(passwordText){
  /*setting passwordChoices to an empty string because i am going to change 
  this variable later to include character criteria*/
  var passwordChoices = ''
  var password =''
  
  //Prompting the user to give me a number
  var passwordPrompt = window.prompt("Please enter number of characters", "");
  
  //parse the string to an integer and testing that the number meets min of 8 and max of 128. if not, reprompt user
  
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

  //If the user presses ok on the confirm window, the boolean is true and will reassign the passwordChoices variable with the value of alphaUpper from line 4
  //If the user presses cancel, the boolean is false and it will run to the next if statement and the variable will not be reassigned a value.
  if(isUppercase){
    passwordChoices = passwordChoices + alphaUpper
  }
   //If the user presses ok on the confirm window, the boolean is true and will reassign the passwordChoices variable with the value of alphaUpper + alphaLower
  if (isLowercase){
    passwordChoices = passwordChoices + alphaLower
  }
   //If the user presses ok on the confirm window, the boolean is true and will reassign the passwordChoices variable with the value of alphaUpper + alphaLower + numbers
  if (isNumbers){
    passwordChoices = passwordChoices +  numbers
  }
   //If the user presses ok on the confirm window, the boolean is true and will reassign the passwordChoices variable with the value of alphaUpper + alphaLower + numbers + specialChar
  if (isSpecialChar){
    passwordChoices = passwordChoices + specialChar
  }


  //I am using a for loop to iterate through the character length provided by the user and add a random character. When i reach the number the user provided, the loop will end.
  //The password variable is reassigned the value from Math.random
  for (let index = 0; index < parseInt(passwordPrompt); index++) {
    const randomPassword = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    password = password + randomPassword
  } 

  //Making the user choose a criteria
 if (!isUppercase && !isLowercase && !isSpecialChar && !isNumbers ){
    alert("Please choose at least 1 criteria. Try again")
    passwordText.value = ""
  }
  // output will be the new generated password
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
