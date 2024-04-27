const datepicker = document.getElementById("datepick");
const timepicke = document.getElementById("timepick");
let countdownConainer = document.createElement("div");
countdownConainer.setAttribute("class","countdown-container")
countdownConainer.setAttribute("data-date",`${datepicker.value} ${timepicke.value}`)
let addbtn = document.querySelector(".add");
datepicker.value = new Date();
window.onload = function () {
  document.querySelector(".countdowns").innerHTML = localStorage.getItem("data")
  datepicker.value = localStorage.getItem("dateC")

}
datepicker.onchange = function() {
  localStorage.setItem("dateC",datepicker.value)
}


  // //this methoud for traking times on the divs
  setInterval(() =>{
    //first we get an array of divs

    let arrofcounter = Array.from(document.querySelectorAll(".countdown-container"));
    //know we will loop on the div and set the time of each div based on data-set attrbite
    arrofcounter.forEach((e) => {
      // we get the current time
      let currenttime = new Date().getTime();
      //we get the coming event time
      let comingevent = new Date(e.getAttribute("data-date")).getTime();
      //the reaming time
      let reamingtime = comingevent - currenttime;
      if ( reamingtime < 0){
        e.children[1].children[0].children[1].textContent = "0" 
        e.children[1].children[1].children[1].textContent =  "0"
        e.children[1].children[2].children[1].textContent =  "0"
        e.children[1].children[3].children[1].textContent =  "0"
        return
      }
      //the divcountdown wrapper days
      e.children[1].children[0].children[1].textContent =  (Math.floor(reamingtime / 1000 / 60 / 60 /24))
      e.children[1].children[1].children[1].textContent =  (Math.floor(reamingtime / 1000 / 60 / 60 % 24)) 
      e.children[1].children[2].children[1].textContent =  (Math.floor(reamingtime / 1000 / 60 % 60))
      e.children[1].children[3].children[1].textContent =  (Math.floor(reamingtime / 1000 % 60))
    })
    let arrayofdel = Array.from(document.querySelectorAll(".del"))
    arrayofdel.forEach((e) => {
      e.addEventListener("click",function(){
        this.parentElement.parentElement.remove();
      })
    })
  },1000)
  addbtn.onclick = function() { 
    if (desc.value === "" || datepicker.value === ""){
      return;
    }
    let div = document.createElement("div")
    console.log("not retuned")
    if(timepicke.value === ""){
      div.setAttribute("data-date",`${datepicker.value} 12:00`)
    }
    else {
      div.setAttribute("data-date",`${datepicker.value} ${timepicke.value}`)

    }

    const markup = `
<h2 class="desc" > ${document.getElementById("desc").value}<br><span>${div.getAttribute("data-date")}</span><div class="del">remove</div></h2>
<div class="contdown">
  <div class="wraper">
    <p>days</p>
    <div class="days">0</div>
  </div>
  <div class="wraper">
    <p>hours</p>
    <div class="hours">0</div>
  </div>
  <div class="wraper">
    <p>minutes</p>
    <div class="minutes">0</div>
  </div>
  <div class="wraper">
    <p>seconds</p>
    <div class="sec">0</div>
  </div>

</div>
`

    div.className = "countdown-container"
    div.innerHTML = markup
    document.querySelector(".countdowns").appendChild(div)

    
    SavetolocalStorage();
    
  }
  function SavetolocalStorage() {
    localStorage.setItem("data", document.querySelector(".countdowns").innerHTML);
  }


function remove() {
    this.parentElement.remove()
  }


