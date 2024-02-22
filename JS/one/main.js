let create = document.querySelector("input[type=submit]");
let myselection = document.querySelector("select");
let vidid = document.getElementById("vid");
window.onload = function () {
  let eltypr = document.querySelector("select[name=type]");
  eltypr.value = "Div"
}
myselection.oninput = function () {
  let eltex = document.querySelector("input[name=texts]");
  if (myselection.value === "iframe") {
    vidid.classList.remove("hidden");
    eltex.classList.add("hidden")
 

  } else {
    vidid.classList.add("hidden");
    eltex.classList.remove("hidden")
  }
};
create.onclick = function (e) {
  let url = `https://www.youtube.com/embed/${vidid.value}`;
  document.getElementsByClassName("results")[0].innerHTML = "";
  e.preventDefault();
  let elnums = document.querySelector("input[type=number]");
  let eltypr = document.querySelector("select[name=type]");
  let eltex = document.querySelector("input[name=texts]");
  for (let i = 0; i < elnums.value; i++) {
    let newel = document.createElement(`${eltypr.value}`);
    if (eltypr.value === "iframe") {
      newel.setAttribute("src",url)
    }
    else{
    newel.innerHTML = eltex.value;
  }
    document.getElementsByClassName("results")[0].appendChild(newel);
  }
};
