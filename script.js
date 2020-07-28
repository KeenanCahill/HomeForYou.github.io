window.onload = startForm;

function startForm() {
  document.getElementById("signin").onsubmit = signIn;
}

function signIn() {
  if (document.getElementById("signin").email.value.length == 0) {
    alert("You must enter a email");
    return false;
  } else if (document.getElementById("signin").password.value.length == 0) {
    alert("You must enter a password");
    return false;
  } else return true;
}
