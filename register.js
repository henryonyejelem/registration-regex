let errors = [];
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");

function checkForm(){
   errors = [];
   function addError(element, message){
     element.classList.add("error");
     errors.push(message);
   };
 
   if (fullName.value.trim().length < 2) {
     addError(fullName, "Missing full name.");
   }
 
   if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/.test(email.value)) {
     addError(email, "Invalid or missing email address.");
   }
 
   if (password.value.length < 10 || password.value.length > 20) {
     addError(password, "Password must be between 10 and 20 characters.");
   }
 
   if (!/[a-z]/.test(password.value)) {
     addError(password, "Password must contain at least one lowercase character.");
   }
 
   if (!/[A-Z]/.test(password.value)) {
     addError(password, "Password must contain at least one uppercase character.");
   }
 
   if (!/\d/.test(password.value)) {
     addError(password, "Password must contain at least one digit.");
   }
 
   if (password.value.length > 10 && password.value !== passwordConfirm.value) {
     addError(passwordConfirm, "Password and confirmation password don't match.");
   }
 
   if (errors.length === 0) {
      return true;
    } 
   else {
      return false;
   }
}
  
  document.getElementById("submit").addEventListener("click", function (event) {
    let errorDiv = document.getElementById("formErrors");
    let isValid = checkForm();
  
    if (!isValid) {
      errorDiv.classList.remove("hide");
      errorDiv.innerHTML = `<ul>${errors.map((err) => `<li>${err}</li>`)}</ul>`;
    } else {
      errorDiv.classList.add("hide");
      fullName.classList.remove("error");
      email.classList.remove("error");
      password.classList.remove("error");
      passwordConfirm.classList.remove("error");
    }
  
    // Prevent default form action. DO NOT REMOVE THIS LINE
    event.preventDefault();
  });
 