//PORTFOLIO
var portfolioButtons = document.getElementById("portfolio-buttons"),
    portfolioImg = document.getElementById("portfolio-img");

    //portfolio = document.getElementByClassName("portfolio");

    portfolioButtons.addEventListener("click", chooseFilterButton);

    function chooseFilterButton(event){
      event.stopPropagation();
      for(var i = 0; i < portfolioButtons.childNodes.length; i++) {
        var child = portfolioButtons.childNodes[i];
        if (child.nodeType === 1) {
           child.removeAttribute("class");
        } 
        }
      var filter = event.target.getAttribute("id");
      if (event.target.tagName === "BUTTON") {
        event.target.setAttribute("class", "active");
        
   
        }
        if (filter == "all"){
           for(var i = 0; i < portfolioImg.childNodes.length; i++) {
        if (portfolioImg.childNodes[i].nodeType === 1){
            portfolioImg.childNodes[i].style.display = "";
        }
    }
        } else {
      for(var i = 0; i < portfolioImg.childNodes.length; i++) {
        if (portfolioImg.childNodes[i].nodeType === 1){
            portfolioImg.childNodes[i].style.display = "";
        }
            //console.log(portfolioImg.childNodes[i].className);
            if (portfolioImg.childNodes[i].nodeType === 1 && portfolioImg.childNodes[i].className !== filter){
                   portfolioImg.childNodes[i].style.display = "none";
            }
                
            
        }
}
       // console.log(event.target.getAttribute("id"));

      }
    
/*}*/