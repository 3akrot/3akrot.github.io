const datepicker = document.getElementById("datepick");
const timepicke = document.getElementById("timepick");
let days = document.querySelector(".days")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".sec")
datepicker.value = new Date();
// days.appendChild(document.createTextNode("kosomel javscript"))
datepicker.onchange = function() {
  localStorage.setItem("currentdate", datepicker.value)
  localStorage.setItem("currenttime", timepicke.value)
}
timepicke.onchange = function() {
  localStorage.setItem("currentdate", datepicker.value)
  localStorage.setItem("currenttime", timepicke.value)
}
window.onload = function() {
  datepicker.value = localStorage.getItem("currentdate");
  timepicke.value = localStorage.getItem("currenttime");
}

  setInterval(()=> {
    if(datepicker.value === "") return
  comingevent = new Date(datepicker.value +" "+ timepicke.value);
  currentatimg = new Date();
  console.log(comingevent)
  console.log(currentatimg)
  reamingin = comingevent - currentatimg ;
  if (reamingin <= 0) {
    days.textContent = "0" ;
    hours.textContent = "0" ;
    minutes.textContent = "0";
    seconds.textContent = "0";
    return 
  }
  dayscount =  (Math.floor(reamingin / 1000 / 60 / 60 /24))
  hourscount = (Math.floor(reamingin / 1000 / 60 / 60 % 24)) 
  minutescount = (Math.floor(reamingin / 1000 / 60 % 60))
  secondscount = (Math.floor(reamingin / 1000 % 60))
  days.textContent =  String(dayscount);
  hours.textContent =  String(hourscount);
  minutes.textContent = String(minutescount);
  seconds.textContent = String(secondscount);
  
  },1);
  



