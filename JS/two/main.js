let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let i;
let x = document.querySelector(".x");

let arr;
setInterval(function(){
  
  arr = document.querySelectorAll(".tasks .task");
  updatelocal()
},100)
function updatelocal(){
  for (let i = 0; i < arr.length; i++) {
    localStorage.setItem(`task${i}`,arr[i].getAttribute("data-cont"));    
  }
}






button.onclick = function () {
  let val = inputfield.value;
  sessionStorage.setItem("val",inputfield.value);
  let b = document.createElement("div");
  b.classList.add("task");
  b.textContent = val;
  let del = document.createElement("button");
  del.innerHTML = "remove";
  del.classList.add("del");
  del.onclick = function () {
    del.parentElement.style.cssText = "animation: del 0.3s forwards;";
    setTimeout(function () {
      del.parentElement.remove();
      localStorage.clear();
    }, 300);
  };
  b.appendChild(del);
  b.setAttribute("data-cont",val);
  b.style.cssText = "animation: add 0.5s forwards;";
  document.querySelector(".tasks").appendChild(b);
  // b.style.cssText = "animation:"
};
//load elments
window.onload = function () {
  inputfield.value = sessionStorage.getItem("val")
  for (let i = 0; i < localStorage.length; i++) {
    let b = document.createElement("div");
    b.classList.add("task");
    b.textContent = localStorage.getItem(localStorage.key(i));
    let del = document.createElement("button");
    del.innerHTML = "remove";
    del.classList.add("del");
    del.onclick = function () {
      del.parentElement.style.cssText = "animation: del 0.3s forwards;";
      setTimeout(function () {
        del.parentElement.remove();
        localStorage.clear();
      }, 300);
    };
    b.appendChild(del);
  b.setAttribute("data-cont",localStorage.getItem(localStorage.key(i)));
  // b.style.cssText = "animation: add 0.5s forwards;";
  document.querySelector(".tasks").appendChild(b);
  }
};

