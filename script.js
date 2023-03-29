var attempt = 2;
function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var rollno = document.getElementById("rollno").value;

  if (email == "sathya@gmail.com" && password == "sathya" && rollno == "53") {
    window.location.assign("./student.html");
    alert("Login successfully");
    return false;
  } else {
    if (attempt == 0) {
      window.location.assign("./index.html");
      alert("Invalid information");
    } else {
      attempt = attempt - 1;
      alert("Login Failed Only " + attempt + "attempts available");
    }
    return false;
  }
}
