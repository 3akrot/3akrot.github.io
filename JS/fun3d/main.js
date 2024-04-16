let pre = document.getElementById('pre');
window.onmousemove = function(event) {
  rotate(event, pre);
};
window.oncontextmenu = function(event) {
  event.preventDefault();
}
function rotate(event , elment){
  //first get mouse pos on screen

  let x = event.clientX;;
  let y = event.clientY;

  //we want to substract from the screen middle it to make it relivant to the center
  x = x - window.innerWidth / 2;
  y = y - window.innerHeight / 2;
  persentagex = (x /  window.innerWidth) * 70;
  persentagey = -1 * (y /  window.innerWidth) * 70;
  pre.style.setProperty("--offsetX",persentagey + "deg");
  pre.style.setProperty("--offsetY",persentagex + "deg");
}