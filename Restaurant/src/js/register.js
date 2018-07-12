function register() {
  var name = document.forms['register']['uname'],
      email = document.forms['register']['email'],
      psw = document.forms['register']['psw'],
      pswConfirmed = document.forms['register']['psw-confirmed'];

  if(psw.value !== pswConfirmed.value) {
    pswConfirmed.setCustomValidity("Passwords Don't Match");
  } else {
    if (localStorage.getItem(name.value)){
      name.setCustomValidity("User name already exists");
    } else {
      var user = JSON.stringify({name: name.value, email: email.value, password: psw.value, isAdmin: false});
      
      localStorage.setItem(name.value, user);
      sessionStorage.clear();
      sessionStorage.setItem(name.value, user);
    }
  }
}

export { register };