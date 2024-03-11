let inputfield = document.querySelector("input[type = text]");
let button = document.querySelector(".form button");
let i;
let arr = [];

let x = document.querySelector(".x");
x.onclick = function () {
  localStorage.clear();
};

if (window.localStorage.getItem("i") == null) {
  i = 0;
  localStorage.setItem("i", 0);
} else {
  i = localStorage.getItem("i");
}
// addremove = function () {
//   document.querySelectorAll(".del").forEach((e) => {
//     e.addEventListener("click", function () {
//       e.parentElement.remove();
//       console.log(i);
//     });
//   });
// };
// console.log(inputfield);
button.onclick = function () {
  let val = inputfield.value;
  let b = document.createElement("div");
  b.classList.add("task");
  b.textContent = val;
  let del = document.createElement("button");
  del.innerHTML = "remove";
  del.classList.add("del");
  del.onclick = function () {
    //find the elment deleted and remove it from the local storage
    localStorage.removeItem(
      `task${del.parentElement.getAttribute("data-num")}`
    );
    del.parentElement.style.cssText = "animation: del 0.5s forwards;";
    setTimeout(function () {
      del.parentElement.remove();
      localStorage.getItem(`task`);
      i--;
      localStorage.setItem("i", i);
    }, 500);
  };
  b.appendChild(del);
  i++;
  b.setAttribute("data-num", i);
  b.style.cssText = "animation: add 2s forwards;";
  document.querySelector(".tasks").appendChild(b);
  // b.style.cssText = "animation:"

  localStorage.setItem(`i`, `${i}`);
  localStorage.setItem(`task${i}`, `${val}`);
};
//load elments
window.onload = function () {

  for (let j = 0; j < localStorage.length; j++) {
    if (localStorage.key(j) === "i"){
      console.log("das")
      continue;

    }
    let x = document.createElement("div");
    x.classList.add("task");
    let remove = document.createElement("button");
    remove.innerHTML = "remove";
    remove.classList.add("del");
    remove.onclick = function () {
      //find the elment deleted and remove it from the local storage
      localStorage.removeItem(localStorage.key(i));
      remove.parentElement.style.cssText = "animation: del 0.5s forwards;";
      setTimeout(function(){
        remove.parentElement.remove();
        localStorage.getItem(`task`);
        i--;
  
        localStorage.setItem("i", i);
      },500)
     
    };
    x.innerHTML = localStorage.getItem(localStorage.key(j));
    
    x.appendChild(remove);
    document.querySelector(".tasks").appendChild(x);
  }
};
setInterval(function () {
  console.log(localStorage.getItem(localStorage.key(1)));

}, 1000);
for ( i = 0 ; i < localStorage.length ; i++){
  console.log(localStorage.key(i))
}