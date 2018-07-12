function login() {

  var name = document.forms['login']['uname'],
      psw = document.forms['login']['psw'];

  if(localStorage.getItem(name.value)) {
    var user = JSON.parse(localStorage.getItem(name.value));
    var activeUser = JSON.stringify({name: user.name, isAdmin: user.isAdmin});
    sessionStorage.clear();
    sessionStorage.setItem(user.name, activeUser);
  } else {
    name.setCustomValidity("User doesn't exist");
  }
}

export { login };