import './styles/index.scss';
import { register } from './js/register.js';
import { login } from './js/login.js';
import './js/init.js';
import './js/burger.js';
import { booking } from './js/booking.js';


var openLogin = document.getElementById('open-login'),
  openRegistration = document.getElementById('open-registration'),
  closeIcon = document.querySelectorAll('.close-icon'),
  openIcon = document.querySelectorAll('.open-icon'),
  loginSection = document.getElementById('login-section'),
  registretionSection = document.getElementById('registretion-section'),
  tableShadule = document.getElementById('table-schedule'),
  tables = document.querySelector('.tables');

openRegistration.onclick = function(){
  registretionSection.style.display = "block";
};

openLogin.onclick = function(){
  loginSection.style.display = "block";
};

for (var i = 0; i < closeIcon.length; i++) {
  closeIcon[i].addEventListener('click', function(event) {
    this.parentNode.style.display = "none";
  });
}

window.onclick = function(event) {
  if (event.target === registretionSection || event.target === loginSection || event.target === tableShadule) {
    loginSection.style.display = "none";
    registretionSection.style.display = "none";
    tableShadule.style.display = "none";
  }
};

document.getElementById("user-register").addEventListener("submit", function(event){
  event.preventDefault();
  register();
});

document.getElementById("user-login").addEventListener("submit", function(event){
  event.preventDefault();
  login();
});

tables.addEventListener('click', function(event){
  if (event.target.getAttribute('class').match(/table \d+/)) {
  var id = event.target.getAttribute('class').match(/\d+/)[0];
  booking(id);
  }
});