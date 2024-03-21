let nav = document.getElementById("nav-men");
let menuIcon = document.querySelector("header .icon");
menuIcon.onclick = function () {
  nav.classList.toggle("open")
}
window.onload = function(){
  if (window.innerWidth <= 768) {
    document.querySelector("video source").src = "assets/Recipetwo.mp4";
    document.querySelector("video").load();
  }
}