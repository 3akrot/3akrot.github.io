let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let tasks = document.querySelector(".tasks");

document.querySelector(".container").addEventListener("click", function (e) {
  let val = inputfield.value;

  sessionStorage.setItem("val", inputfield.value);
  val = sessionStorage.getItem("val")
  if (val === "") {
  }
  if (val === "clrlocal"){
    localStorage.clear()
  }
   else if (e.target === button) {
    let b = document.createElement("div");
    b.textContent = val;
    let del = document.createElement("span");
    del.innerHTML = "remove";
    del.classList.add("del");
    b.appendChild(del);
    b.style.cssText = "animation: add 0.5s forwards;";
    document.querySelector(".tasks").appendChild(b);
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.style.cssText = "animation: del 0.3s forwards;";
    setTimeout(function () {
      e.target.parentElement.remove();
      sav();
    }, 300);
  } else if (e.target.tagName === "DIV") {
    e.target.classList.toggle("checked");
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
