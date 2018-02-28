window.onload = function() {
//FIXED MENU
var menu = document.getElementById("menu");
var menuTop = menu.getBoundingClientRect().top + window.pageYOffset;
    window.onscroll = function() {
      if (menu.classList.contains('fixing') && window.pageYOffset < menuTop) {
        menu.classList.remove('fixing');
      } else if (window.pageYOffset > menuTop) {
        menu.classList.add('fixing');

    }

}

      if (menu.classList.contains('fixing') && window.pageYOffset < menuTop) {
        menu.classList.remove('fixing');
      } else if (window.pageYOffset > menuTop) {
        menu.classList.add('fixing');

    }

  var form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    console.log("Saving value", form.elements.value.value);
    event.preventDefault();
  });

(function(){
    console.log("ok");
    $.ajax({
    url: 'http://localhost:8081/getimg',             // указываем URL и
    dataType: 'image/jpg',
    //async: true,
   // dataType : "json",                     // тип загружаемых данных
    success: function (data, textStatus) { // вешаем свой обработчик на функцию success
        var spinner = document.getElementById('spinner');
        spinner.style.display = "none";
        console.log("ok2")
        document.getElementById('test').innerHTML = "<img src='" + data + ":image/jpeg;base64,'alt=''>";
    } 
});
}());

for (let element of document.querySelectorAll('.number')){
  let start = 1
    window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > element.getBoundingClientRect().top - window.innerHeight / 2) {
        window.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {

            element.innerHTML = element.getAttribute("data-first") + ++start + element.getAttribute("data-sign");
            if (start == element.getAttribute("data-max")){
                clearInterval(interval);
            }

        }, 2);
    }

});
}

(function enableNumberAnimation(){
  for (let element of document.querySelectorAll('.number')){
  let start = 1;
  
      if(window.pageYOffset > element.getBoundingClientRect().top - window.innerHeight / 2) {
        let interval = setInterval(function() {
            element.innerHTML = element.getAttribute("data-first") + ++start + element.getAttribute("data-sign");
            if (start == element.getAttribute("data-max")){
                clearInterval(interval);
            }

        }, 2);
    }
  }
})();


}
