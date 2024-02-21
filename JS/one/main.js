let create = document.querySelector("input[type=submit]");

create.onclick = function (e) {
  document.getElementsByClassName("results")[0].innerHTML =""
  e.preventDefault();
  let elnums = document.querySelector("input[type=number]");
  let eltypr = document.querySelector("select[name=type]");
  let eltex = document.querySelector("input[name=texts]");
  for (let i = 0; i < elnums.value; i++) {
    let newel = document.createElement(`${eltypr.value}`);
    newel.innerHTML = eltex.value
    document.getElementsByClassName("results")[0].appendChild(newel);
  }
};
