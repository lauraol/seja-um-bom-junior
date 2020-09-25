let conselho = null;
let arrayConselhos = [];

window.addEventListener("load", () => {
  buscarConselho();
});

function buscarConselho() {
  fetch("https://api.adviceslip.com/advice")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.querySelector("#conselho").innerHTML = data.slip.advice;
      console.log(data.slip.advice);
    });
}
