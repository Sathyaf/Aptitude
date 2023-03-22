var attempt = 3;
function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rollno = document.getElementById("rollno").value;
  if (email == "sathya@gmail.com" && password == "sathya" && rollno == "53") {
    alert("Login successfully");
    return false;
  } else {
    attempt--;
    alert("You have left " + attempt + " attempt;");
    if (attempt == 0) {
      document.getElementById("email").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("rollno").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}
