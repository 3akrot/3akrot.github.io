const datepicker = document.getElementById("datepick");
const timepicke = document.getElementById("timepick");
let countdownConainer = document.createElement("div");

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

//  this methoud for traking times on the divs
setInterval(() => {
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
      this.parentElement.parentElement.remove();
      SavetolocalStorage();
    });
  });
}, 1000);
addbtn.onclick = function () {
  if (desc.value === "" || datepicker.value === "") {
    return;
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
  )}</span><div class="del">remove</div></h2>
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
      document.querySelector(".countdowns").insertBefore(div, min.nextElementSibling);
    }
  }
    else{
    document.querySelector(".countdowns").insertBefore(div, min);
  }
  SavetolocalStorage();
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






