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

function match() {
  
  let pass1 = document.getElementById('pass').value;
  let c_pass = document.getElementById('c_pass')
  let c_layout = document.getElementById('match');
  
  if (c_pass.value == pass1) {
    c_pass.style.color = "#8BC34A";
    c_layout.style.backgroundColor = "#8BC34A";
  }
  else{
    c_pass.style.color = "#F44336";
    c_layout.style.backgroundColor = "#F44336";
  }
}