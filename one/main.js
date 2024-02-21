document.getElementById("Other links").onclick = function () {
  document.getElementById("mega").style.animation = "popup var(--main-transition) forwards";
}
// document.onclick = function () {
//   document.getElementById("mega").style.animation = "";
// }
var megaVisible = true; // Initial state

document.getElementById("Other links").onclick = function () {
  var megaElement = document.getElementById("mega");

  if (megaVisible) {
    megaElement.style.animation = "popup var(--main-transition) forwards";;
  } else {
    megaElement.style.animation = "";;
  }

  megaVisible = !megaVisible; // Toggle the state
}
