function pass() {
  var check = document.getElementById('pass');
  if (check.type === "password") {
    check.type = "text";
  } else {
    check.type = "password";
  }
}