const form = document.getElementById("form");
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitButton = document.getElementById("submit");
const errorIcons = Array.from(document.querySelectorAll(".error-icon"));
const inputBlocks = Array.from(document.querySelectorAll(".input-block"));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fname = fnameInput.value;
  const lname = lnameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // yes, i know, this is fucking cursed and impractical
  if (!fname || !lname || !email || !password) {
    form.classList.add("error-form");
    if (!fname) {
      inputBlocks[0].classList.add("error-field");
    } else {
      inputBlocks[0].classList.contains("error-field") &&
        inputBlocks[0].classList.remove("error-field");
    }
    if (!lname) {
      inputBlocks[1].classList.add("error-field");
    } else {
      inputBlocks[1].classList.contains("error-field") &&
        inputBlocks[1].classList.remove("error-field");
    }
    if (!email) {
      inputBlocks[2].classList.add("error-field");
    } else {
      inputBlocks[2].classList.contains("error-field") &&
        inputBlocks[2].classList.remove("error-field");
    }
    if (!password) {
      inputBlocks[3].classList.add("error-field");
    } else {
      inputBlocks[3].classList.contains("error-field") &&
        inputBlocks[3].classList.remove("error-field");
    }
  } else {
    form.classList.contains("error-form") &&
      form.classList.remove("error-form");
    inputBlocks.forEach((elem) => {
      elem.classList.contains("error-field") &&
        elem.classList.remove("error-field");
    });
  }
});