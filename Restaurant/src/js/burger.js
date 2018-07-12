(function (){
  var menuBurger = document.getElementById('menu-burger'),
      navList = document.querySelector('nav li'),
      navUl = document.querySelector('nav ul');

  menuBurger.onclick = function(event){
    this.classList.toggle('change');

/*    if (this.getAttribute('class') == 'change'){
      navList.style.display = 'block';
      navUl.style.display = 'block';
    } else {
      navList.style.display = 'none';
      navUl.style.display = 'none';
    }*/
  };

})();