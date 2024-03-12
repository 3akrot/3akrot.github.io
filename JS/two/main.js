let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let tasks = document.querySelector(".tasks");


document.querySelector(".container").addEventListener("click",function(e){
  let val = inputfield.value;
  
  val = sessionStorage.getItem("val")

  if (e.target === button && val !== ""){
    let b = document.createElement("div");
    b.textContent = val;
    let del = document.createElement("span");
    del.innerHTML = "remove";
    del.classList.add("del");
    b.appendChild(del);
  b.style.cssText = "animation: add 0.5s forwards;";
  document.querySelector(".tasks").appendChild(b);
  }
  else if (e.target.tagName === "SPAN"){
    e.target.parentElement.style.cssText = "animation: del 0.3s forwards;";
    setTimeout(function () {
      e.target.parentElement.remove();
    }, 300);
  }
  else if (e.target.tagName === "DIV"){
    e.target.classList.toggle("checked")
  }
  console.log(e.target)
  sav()
  sessionStorage.setItem("val",inputfield.value);

})



//load elments

function sav(){
  localStorage.setItem("data",tasks.innerHTML)
}
function  load() {
  tasks.innerHTML = localStorage.getItem("data")
}
load()
