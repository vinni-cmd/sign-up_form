let password = document.querySelector('#psw');
let passwordC = document.querySelector("#pswC");
let error = document.querySelector ('#psw_match');

passwordC.addEventListener('input', compareFields)

function compareFields() {
  let password = document.querySelector('#psw');
  let passwordC = document.querySelector("#pswC");
  if (password === passwordC) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}