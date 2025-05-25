// window.addEventListener("load", function(){
  function menuToggle(e){
    let menu = document.getElementById("menu");
    if(window.innerWidth > 770)
      menu.classList.remove("menuToggle");

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
window.addEventListener("scroll", function () {
  const header = document.querySelector("header.fixed");
  if (window.scrollY > 0) {
    header.classList.add("header-shadow");
  } else {
    header.classList.remove("header-shadow");
  }
})
// })

window.addEventListener("resize", function(){
    let menu = document.getElementById("menu");
    console.log(menu.classList)
    if(window.innerWidth > 770){
      menu.classList.remove("menuToggle");
      menu.classList.remove("menuToggleOff");
    }
})

window.addEventListener("load", function(){
  this.document.querySelector(".pre-loader").classList.add("d-none");
})