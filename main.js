// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

let beenTo = [];
let planTo = [];

const planBtns = document.querySelectorAll("button[type=planOn]");
for (i = 0; i < planBtns.length; i++) {
  planBtns[i].addEventListener("click", (e) => {
    planTo.push(e.target.parentNode.firstChild.textContent);
    console.log(planTo);
    axios.post('http://localhost:5500/api/plan', {
        country: e.target.parentNode.firstChild.textContent
    }) .then((res) => {
        console.log(res)
    })
    // displayPlanOn(e.target.parentNode.firstChild.textContent);
  });
}
// function displayPlanOn(country) {
//   let list = document.createElement("li");
//   list.textContent = country;
// //   document.getElementById("#2").appendChild(list);
// }

const beenToBtns = document.querySelectorAll("button[type=addButton]");
for (i = 0; i < beenToBtns.length; i++) {
  beenToBtns[i].addEventListener("click", (e) => {
    beenTo.push(e.target.parentNode.firstChild.textContent);
    console.log(beenTo);
    axios.post('http://localhost:5500/api/been', {
        country: e.target.parentNode.firstChild.textContent
    }) .then((res) => {
        console.log(res)
    })
    // displayBeenTo(e.target.parentNode.firstChild.textContent);
  });
}
// function displayBeenTo(country) {
//   let list = document.createElement("li");
//   list.textContent = country;
//   document.getElementById("#1").appendChild(list);
//}

