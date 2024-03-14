let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let tasks = document.querySelector(".tasks");
let appered = false;
setInterval(function(){
  sessionStorage.setItem("val",inputfield.value);
},100)
inputfield.oninput = function(){
  
}

document.querySelector(".container").addEventListener("click", function (e) {
  let val = inputfield.value;

  val = sessionStorage.getItem("val")

  if (e.target === button) {
    if (val !== "") {
      let b = document.createElement("div");
      let text = document.createElement("p");
      text.className = "detail"
      text.innerHTML = val
      b.appendChild(text)
      let del = document.createElement("span");
      del.innerHTML = "remove";
      del.classList.add("del");
      b.appendChild(del);
      b.style.cssText = "animation: add 0.5s forwards;";
      document.querySelector(".tasks").appendChild(b);
    }
    else {
        if (document.querySelector(".popup") === null) {
          let popup = document.createElement("div");
        popup.className = "popup";
        let head = document.createElement("h1");
        head.innerHTML  = "ALERT";
        let p = document.createElement("p");
        p.innerHTML  = "YOU MUST ENTER SOMETHING";
        let popclose = document.createElement("span")
        popclose.className = "popupc";
        popclose.innerHTML = "X";
        popup.appendChild(head);
        popup.appendChild(p);
        popup.appendChild(popclose);
        document.body.appendChild(popup);
        setTimeout(function(){
          popup.classList.add("show")
        },100)
        popclose.onclick = function () {
          popup.classList.remove("show");
          // head.innerHTML = ""
          // p.innerHTML = ""
          setTimeout(function(){
            popup.remove();
        },500)
          
        }
        }
      


        
      
    }
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.style.cssText = "animation: del 0.3s forwards;";
    setTimeout(function () {
      e.target.parentElement.remove();
      sav();
    }, 300);
 
  } else if (e.target.tagName === "DIV") {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "P"){
    if (document.querySelector(".popup2") === null) {
      let popup = document.createElement("div");
    popup.className = "popup2";
    let head = document.createElement("h1");
    head.innerHTML  = "";
    let p = document.createElement("p");
    p.innerHTML  = e.target.innerHTML;
    let popclose = document.createElement("span")
    popclose.className = "popupc";
    popclose.innerHTML = "X";
    popup.appendChild(head);
    popup.appendChild(p);
    popup.appendChild(popclose);
    document.body.appendChild(popup);
    setTimeout(function(){
      popup.classList.add("show")
    },100)
    popclose.onclick = function () {
      popup.classList.remove("show");
      // head.innerHTML = ""
      // p.innerHTML = ""
      setTimeout(function(){
        popup.remove();
    },500)
      
    }
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
}
load();
