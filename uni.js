var feet = document.querySelector("#feet");
var inch = document.querySelector("#inch");
var btn = document.querySelector("button");
var fti = document.querySelector(".fti");
var itf = document.querySelector(".itf");

let convertor = "fti";

fti.addEventListener("click", function () {
  resetButtonStyles();
  resetFeetValue();
  resetInchvalue();
  convertor = "fti";
  fti.style.backgroundColor = "black";
  feet.setAttribute("placeholder", "Enter only digits");
  feet.focus();
  feet.removeAttribute("readonly");
  inch.setAttribute("readonly", "true");
  feet.style.outline = "2px solid black";
});

itf.addEventListener("click", function () {
  resetButtonStyles();
  resetFeetValue();
  resetInchvalue();
  convertor = "itf";
  itf.style.backgroundColor = "black";
  inch.setAttribute("placeholder", "Enter only digits");
  inch.focus();
  inch.removeAttribute("readonly");
  feet.setAttribute("readonly", "true");
  inch.style.outline = "2px solid black";
});

btn.addEventListener("click", function () {
  if (convertor === "fti") {
    // Convert feet to inches
    inch.value = feet.value * 12;
  } else if (convertor === "itf") {
    // Convert inches to feet
    let FeetValue = inch.value / 12;
    feet.value = FeetValue.toFixed(2);
  }
  btn.style.backgroundColor = "black";
});

function resetButtonStyles() {
  fti.style.backgroundColor = ""; // Reset background color of the first button
  itf.style.backgroundColor = ""; // Reset background color of the second button
  feet.style.outline = ""; // Reset input outline styles
  inch.style.outline = ""; // Reset input outline styles
  btn.style.backgroundColor = ""; // Reset button styles
}

function resetFeetValue() {
  feet.value = "";
  feet.setAttribute("placeholder", "");
}

function resetInchvalue() {
  inch.value = "";
  inch.setAttribute("placeholder", "");
}
