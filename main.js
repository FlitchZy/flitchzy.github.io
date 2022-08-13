function pass() {
  var check = document.getElementById('pass');
  var check1 = document.getElementById('c_pass');
  if (check.type === "password") {
    check.type = "text";
    check1.type = "text"
  } else {
    check.type = "password";
    check1.type = "password";
  }
}

let pass_matching = false;
let pass1 = document.getElementById('pass').value;
let c_pass = document.getElementById('c_pass').value;
let m_layout = document.getElementById('match');

function match() {
  if (c_pass == pass1) {
    c_pass.style.color = "green";
  }
}