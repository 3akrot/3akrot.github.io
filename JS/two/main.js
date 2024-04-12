let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let tasks = document.querySelector(".tasks");
let appered = false;
setInterval(function () {
  sessionStorage.setItem("val", inputfield.value);
}, 100);
inputfield.oninput = function () {};

document.querySelector(".container").addEventListener("click", function (e) {
  let val = inputfield.value;

  val = sessionStorage.getItem("val");

  if (e.target === button) {
    if (val !== "") {
      document.getElementById("sound-add").load();
      document.getElementById("sound-add").play();
      let w = document.createElement("div");
      w.className = "wraper";
      document.querySelector(".tasks").appendChild(w);
      let b = document.createElement("div");
      b.className = "task";
      let text = document.createElement("p");
      text.className = "detail";
      text.innerHTML = val;
      b.appendChild(text);
      let del = document.createElement("span");
      del.innerHTML = "remove";
      del.classList.add("del");
      b.appendChild(del);

      w.appendChild(b);

      b.style.cssText = "animation: add 0.5s forwards;";
    } else {
      if (document.querySelector(".popup") === null) {
        document.getElementById("sound-not").load();
        document.getElementById("sound-not").play();
        let popup = document.createElement("div");
        popup.className = "popup";
        let head = document.createElement("h1");
        head.innerHTML = "ALERT";
        let p = document.createElement("p");
        p.innerHTML = "YOU MUST ENTER SOMETHING";
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
          }, 500);
        };
      }
    }
  } else if (e.target.tagName === "SPAN") {
    document.getElementById("sound-del").load();
    document.getElementById("sound-del").play();
    e.target.parentElement.style.cssText = "animation: del 5s forwards;";
    e.target.parentElement.classList.add("ondel");
    // if(e.target.parentElement.parentElement.nextSibling !== null){

      if (isfull() == false && e.target.parentElement.parentElement.nextSibling === null){ 
        e.target.parentElement.parentElement.style.cssText =
        "animation: spec 5s forwards;";
      }
      else{
        console.log(isfull())
        e.target.parentElement.parentElement.style.cssText =
        "animation: wrap 5s forwards;";
        }
    // }

    //nextSibling 
      

    setTimeout(function () {
      e.target.parentElement.parentElement.remove();
      sav();
    }, 5000);
  } else if (e.target.tagName === "DIV") {
    if (e.target.classList.contains("ondel")) {
      return;
    } else {
      if (
        e.target.classList.contains("task") &&
        e.target.classList.contains("ondel") === false
      ) {
        document.getElementById("sound").load();
        document.getElementById("sound").play();
      }
      e.target.classList.toggle("checked");
    }
  } else if (e.target.tagName === "P") {
    if (document.querySelector(".popup2") === null) {
      let popup = document.createElement("div");
      popup.className = "popup2";
      let head = document.createElement("h1");
      head.innerHTML = "";
      let p = document.createElement("p");
      p.innerHTML = e.target.innerHTML;
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
        }, 500);
      };
    }
  }
  console.log(e.target);
  sav();
});

//load elments

function sav() {
  localStorage.setItem("data", tasks.innerHTML);
}
function load() {
  tasks.innerHTML = localStorage.getItem("data");
  setInterval(() => {
    console.log(isfull());
  },1000);
}
load();
 function isfull(){
  let containerhight = document.querySelector(".container").offsetHeight;
  let elmentheight = tasks.offsetHeight; //
  let taskscount = Array.from(document.querySelectorAll(".task")).length;
  // console.log("tasks count: " + taskscount);
  // console.log("elmentheigh : " + elmentheight);
  // console.log("contaienrhight : " + containerhight);
  // console.log("contaienrhight minus : " + (Number(containerhight)  - (65 + 52 +37.5 + 10)));
  if(elmentheight >= (Number(containerhight)  - (65 + 52 +37.5 + 10))){
    return true;
  }
  else
  return false;

}

