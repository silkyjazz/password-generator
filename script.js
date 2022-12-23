// Assignment code here
var alphaLower = 'abcdefghijklmnopqrstuvwxyz';
var alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var specialChar = '~`!@#$%^&*()_-+={[}]|:;">/';


//I want the user to confirm or deny lowercase  -- confirm("Include lowercase?");
//I want the user to confirm or deny uppercase -- confirm("Include uppercase?");
//I want the user to confirm or deny numbers -- confirm("Include numbers?");

// var confirmUpper = window.confirm("Do you want to include uppercase letters?")

//if the user denies all criteria, i want to alert("must choose characters")

//I want to check if the user has clicked yes or no to each criteria
// if(alphaUpper && alphaLower && numbers && specialChar){generate a password with all criteria}
// if(alphaLower && numbers && specialChar){generate a password with the 3 criteria}
// if(numbers && specialChar){generate a password with 2 criteria}
// if(specialChar){generate a password with 1 criteria}

//i want to set the generate password to the existing password variable on line 59

//after user clicks thru confirms i want the computer to generate a random password
//i want to display that password to the screen



function generatePassword(){
  var passwordChoices = ''
  var password =''
  var passwordPrompt = window.prompt("Please enter number of characters", "");
  
  if( parseInt(passwordPrompt) < 8 || parseInt(passwordPrompt) > 128){
    window.alert("Please choose a number between 8-128")
    generatePassword()
  }else if (!passwordPrompt){
    window.alert("Goodbye!")
  }

  var isUppercase = window.confirm("Do you need Uppercase?")

  if(isUppercase){
    passwordChoices= passwordChoices + alphaUpper
  }
  for (let index = 0; index < parseInt(passwordPrompt); index++) {
    const randomElement = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
    password = password + randomElement
  }
  
  return password

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
