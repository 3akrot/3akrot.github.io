const datepicker = document.getElementById("datepick");
const timepicke = document.getElementById("timepick");
let countdownConainer = document.createElement("div");
let emptymessage = document.createElement("p");
emptymessage.classList.add("emptyM");
emptymessage.innerHTML = "No Events Coming<br>Add Some";
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});


const quotes = [
  "استخدم وقتك بحكمة، فالوقت هو أغلى ما نملك",
  "كل دقيقة تعتبر فرصة جديدة لتحقيق النجاح",
  "عش كل لحظة كما لو كانت آخر لحظة في حياتك",
  "لا تضيع الوقت في الأمور السطحية، بل اجعله يعمل لصالحك",
  "الوقت الذي تستثمره في تطوير نفسك هو أفضل استثمار",
  "قيمة الوقت تكمن في كيفية استخدامه، فاجعل كل دقيقة تعتبر",
  "استغلال الوقت بشكل صحيح يقود إلى النجاح والتحقيقات الكبيرة",
  "احرص على تحقيق أهدافك في الوقت المناسب، فلا يعود الزمن مرة أخرى",
  "التركيز على اللحظة الحالية يمنحك القدرة على التأثير على المستقبل",
  "إدارة الوقت هي مهارة يجب تعلمها لتحقيق النجاح في الحياة"
];
let randomqto = quotes[Math.floor(Math.random() * quotes.length)]
document.getElementsByClassName("quote")[0].innerHTML = randomqto;

countdownConainer.setAttribute("class", "countdown-container");
countdownConainer.setAttribute(
  "data-date",
  `${datepicker.value} ${timepicke.value}`
);
let addbtn = document.querySelector(".add");
datepicker.value = new Date();

  document.querySelector(".countdowns").innerHTML =
  localStorage.getItem("dataCount");
  datepicker.value = localStorage.getItem("dateC");

datepicker.onchange = function () {
  localStorage.setItem("dateC", datepicker.value);
};
let isshown = false;
if(document.querySelector(".emptyM"))
isshown = true;
window.onload = function () {
  if(document.querySelectorAll(".countdown-container").length === 0 && isshown === false){
    document.querySelector(".countdowns").appendChild(emptymessage);
    isshown = true;
  }
  else{
  emptymessage.remove();
  isshown = false;
  }
}
function setCSSLink() {
  var ss = document.createElement('link');
  ss.rel = "stylesheet";
  ss.href = "//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css";
  document.head.appendChild(ss);
}
//  this methoud for traking times on the divs
setInterval(() => {
  console.log(isshown)
  //first we get an array of divs

  let arrofcounter = Array.from(
    document.querySelectorAll(".countdown-container")
  );
  //know we will loop on the div and set the time of each div based on data-set attrbite
  arrofcounter.forEach((e) => {
    // we get the current time
    let currenttime = new Date().getTime();
    //we get the coming event time
    let comingevent = new Date(e.getAttribute("data-date")).getTime();
    //the reaming time
    let reamingtime = comingevent - currenttime;
    if (reamingtime < 0) {
      e.children[1].children[0].children[1].textContent = "0";
      e.children[1].children[1].children[1].textContent = "0";
      e.children[1].children[2].children[1].textContent = "0";
      e.children[1].children[3].children[1].textContent = "0";
      return;
    }
    //the divcountdown wrapper days
    e.children[1].children[0].children[1].textContent = Math.floor(
      reamingtime / 1000 / 60 / 60 / 24
    );
    e.children[1].children[1].children[1].textContent = Math.floor(
      (reamingtime / 1000 / 60 / 60) % 24
    );
    e.children[1].children[2].children[1].textContent = Math.floor(
      (reamingtime / 1000 / 60) % 60
    );
    e.children[1].children[3].children[1].textContent = Math.floor(
      (reamingtime / 1000) % 60
    );
  });
  let arrayofdel = Array.from(document.querySelectorAll(".del"));
  arrayofdel.forEach((e) => {
    e.addEventListener("click", function () {
      this.parentElement.remove();
      if(document.querySelectorAll(".countdown-container").length === 0 && !isshown){
        document.querySelector(".countdowns").appendChild(emptymessage);
        isshown = true;
      }
      SavetolocalStorage();
    });
  });
}, 100);
addbtn.onclick = function () {


  if (desc.value === "" || datepicker.value === "") {
    Swal.fire({
      willOpen: () => {
        setCSSLink()
      },
      title: 'Error!',
      text: 'Please Enter A Description For The Evnet',
      icon: 'error',
    })
    return;
  }
  if(document.querySelector(".emptyM")){
    document.querySelector(".emptyM").remove();
    isshown = false;
  }
  let div = document.createElement("div");
  console.log("not retuned");
  if (timepicke.value === "") {
    div.setAttribute("data-date", `${datepicker.value} 00:00`);
  } else {
    div.setAttribute("data-date", `${datepicker.value} ${timepicke.value}`);
  }

  const markup = `
<h2 class="desc" > ${
    document.getElementById("desc").value
  }<br><span>${div.getAttribute(
    "data-date"
  )}</span></h2>
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
<div class="del">remove</div>
`;
  div.className = "countdown-container";
  div.innerHTML = markup;
  let min = getmindateelment(new Date(datepicker.value));
  if (fardate(div)) {
    document.querySelector(".countdowns").append(div);
  }
  else if(min && !fardate(min)){
    console.log(min)
    if(min.nextElementSibling != null){
      if(new Date(datepicker.value) < new Date(min.getAttribute("data-date"))){
        document.querySelector(".countdowns").insertBefore(div, min);
        console.log("con")

      }
      else
      document.querySelector(".countdowns").insertBefore(div, min.nextElementSibling);
    }
  }
    else{
    document.querySelector(".countdowns").insertBefore(div, min);
  }
  SavetolocalStorage();
  const Toast = Swal.mixin({
    willOpen: () => {
      setCSSLink()
    },
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }

  });
  Toast.fire({
    icon: "success",
    title: "Added Event " + document.getElementById("desc").value
  });
};
function SavetolocalStorage() {
  localStorage.setItem("dataCount", document.querySelector(".countdowns").innerHTML);
}

function getmindateelment(date){
let arrofcounter = Array.from(document.querySelectorAll(".countdowns .countdown-container"))
min = arrofcounter[0];
arrofcounter.forEach((e)=>{
  if( new Date(e.getAttribute("data-date")).getTime() < date ){
    min = e;
  }
})
return min;
}
function fardate(elment) {
  boolfardate = true;
  let arrofcounter = Array.from(document.querySelectorAll(".countdowns .countdown-container"))
  arrofcounter.forEach((e) => {
    if (new Date(e.getAttribute("data-date")) >  new Date(elment.getAttribute("data-date"))) {
      boolfardate = false;
    }
  })
  return boolfardate;

}
installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}