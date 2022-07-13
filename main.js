let password = document.querySelector('#psw');
let passwordC = document.querySelector("#pswC");

function compareFields() {
  let password = document.querySelector('#psw').value;
  let passwordC = document.querySelector("#pswC").value;
  let error = document.querySelector ('#psw_error');
  error.textContent = ""
  if (password !== passwordC) {
    error.textContent = "* Passwords do not match";
  }
}

passwordC.addEventListener('input', compareFields)
password.addEventListener('input', compareFields)

document.querySelector("#create").addEventListener("click", function(event) {
  let error = document.querySelector ('#psw_error');
  if (error.textContent == "* Passwords do not match") {
  event.preventDefault();
  }}
);