


var megaVisible = true; // Initial state
var megaElement = document.getElementById("mega");
megaElement.style.display = "none";
document.querySelector(".logo").style.color = "black"

document.getElementById("Otherlinks").onclick = function () {
  

  if (megaVisible) {
    megaElement.style.display = "flex";
    setTimeout(function(){
      megaElement.classList.add("active")
    },50)
    document.getElementById("Otherlinks").classList.add("ahov")
  } else {
    megaElement.classList.remove("active")
    setTimeout(function(){
      megaElement.style.display = "none";
    },100)
    document.getElementById("Otherlinks").classList.remove("ahov")
  }

  megaVisible = !megaVisible; // Toggle the state
};

// Set the date we're counting down to
var countDownDate = new Date("Mar 11, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;
  console.log(distance / 1000 / 60 / 60 / 24);

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  // document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  // + minutes + "m " + seconds + "s ";
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
setTimeout(function () {
  let popup = document.createElement("div");
  popup.className = "popup";
  let head = document.createElement("h1");
  head.innerHTML = "Welcome";
  let p = document.createElement("p");
  p.innerHTML = "Welcome to Elzero Web school";
  let popclose = document.createElement("span");
  popclose.className = "popupc";
  popclose.innerHTML = "X";

  popup.appendChild(head);
  popup.appendChild(p);
  popup.appendChild(popclose);
  document.body.appendChild(popup);
  setTimeout(function () {
    popup.classList.add("show");
  }, 100);
  popclose.onclick = function () {
    popup.classList.remove("show");
    // head.innerHTML = ""
    // p.innerHTML = ""
    setTimeout(function () {
      popup.remove();
    }, 1000);
  };
}, 4000);
window.onscroll = function () {
  if (scrollY >= 248) {
    document.querySelector("header").classList.add("trans");
    let x = document.querySelectorAll(".nav > ul > li > a");
    document.querySelector(".logo").style.color = "white"
    document.querySelector(".lang").style.color = "white"
    megaElement.style.backgroundColor = "#3994ff"
    let megalinks = document.querySelectorAll(".mega-menu a")
    megalinks.forEach((e) => e.style.color = "white")
    x.forEach((e) => {e.style.color = "white"
    
  })
    
  } else {
    document.querySelector("header").classList.remove("trans");
    let x = document.querySelectorAll(".nav > ul> li > a");
    document.querySelector(".logo").style.color = "black"
    document.querySelector(".lang").style.color = "black"
    megaElement.style.backgroundColor = "#fff"
    let megalinks = document.querySelectorAll(".mega-menu a")
    megalinks.forEach((e) => e.style.color = "black")
    x.forEach((e) => e.style.color = "black")
  }
};
document.querySelector(".a").onclick = function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"

  })
}
