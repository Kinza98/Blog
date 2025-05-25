// window.addEventListener("load", function(){
  function menuToggle(e){
    let menu = document.getElementById("menu");
    if(menu.classList.contains("menuToggle")){
      menu.classList.remove("menuToggle");
      menu.classList.add("menuToggleOff");
    }
    else
    {
      menu.classList.remove("menuToggleOff");
      menu.classList.add("menuToggle");
    }
  }
// })