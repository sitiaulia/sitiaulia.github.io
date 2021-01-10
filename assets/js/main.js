/*
 * @Author: Siti Aulia Urrahmah
 * @Date: 2021-01-10 06:17:29
 * @Last Modified by: Siti Aulia Urrahmah
 * @Last Modified time: 2021-01-10 12:17:56
 */

// Operation String
let operation = "";
// Result
let resString = "";
let res = null;

// Get Element
const result = document.querySelector(".screen .result");
const screen = document.querySelector(".screen .calculator");

screen.textContent = operation;
// Keycode
const keycodes = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
  "*",
  "/",
  ".",
];

function renderScreen(value, element) {
  element.textContent = value;
}

function checkLength() {
  if (screen.textContent.length >= 23) {
    screen.textContent = "Overload Error";
  }
}

function syntaxError() {
  if (
    eval(screen.textContent) == SyntaxError ||
    eval(screen.textContent) == ReferenceError ||
    eval(screen.textContent) == TypeError
  ) {
    screen.textContent == "Syntax Error";
  }
}

function equals() {
  if (screen.textContent.indexOf("^") > -1) {
    var base = screen.textContent.slice(0, screen.textContent.indexOf("^"));
    var exponent = screen.textContent.slice(
      screen.textContent.indexOf("^") + 1
    );
    screen.textContent = eval("Math.pow(" + base + "," + exponent + ")");
    result.textContent = eval("Math.pow(" + base + "," + exponent + ")");
    operation = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    checkLength();
    syntaxError();
    screen.textContent = eval(screen.textContent);
    result.textContent = eval(screen.textContent);
    operation = eval(screen.textContent);
  }
}

function key() {
  window.addEventListener("keydown", function (e) {
    if (keycodes.includes(e.key)) {
      operation += e.key;
      resString += e.key;
      renderScreen(operation, screen);
    }
    if (e.key == "Backspace") {
      operation = operation.toString().slice(0, -1);
      renderScreen(operation, screen);
    }
    if (e.key === "Enter" || e.key === "=") {
      equals();
    }
  });
}

function btnClick() {
  document.querySelector(".btn.ac").addEventListener("click", function () {
    operation = "";
    res = null;
    renderScreen("0", result);
    renderScreen("", screen);
  });
  document.querySelector(".btn.zero").addEventListener("click", function () {
    operation += "0";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.one").addEventListener("click", function () {
    operation += "1";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.two").addEventListener("click", function () {
    operation += "2";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.three").addEventListener("click", function () {
    operation += "3";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.four").addEventListener("click", function () {
    operation += "4";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.five").addEventListener("click", function () {
    operation += "5";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.six").addEventListener("click", function () {
    operation += "6";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.seven").addEventListener("click", function () {
    operation += "7";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.eight").addEventListener("click", function () {
    operation += "8";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.nine").addEventListener("click", function () {
    operation += "9";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.divide").addEventListener("click", function () {
    operation += "/";
    renderScreen(operation, screen);
  });
  document
    .querySelector(".btn.multiple")
    .addEventListener("click", function () {
      operation += "*";
      renderScreen(operation, screen);
    });
  document
    .querySelector(".btn.subtract")
    .addEventListener("click", function () {
      operation += "-";
      renderScreen(operation, screen);
    });
  document.querySelector(".btn.add").addEventListener("click", function () {
    operation += "+";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.sqrt").addEventListener("click", function () {
    operation += "^";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.dot").addEventListener("click", function () {
    operation += ".";
    renderScreen(operation, screen);
  });
  document.querySelector(".btn.tan").addEventListener("click", function () {
    equals();
    result.textContent = Math.tan(result.textContent);
    operation = result.textContent;
  });
  document.querySelector(".btn.sin").addEventListener("click", function () {
    equals();
    result.textContent = Math.sin(result.textContent);
    operation = result.textContent;
  });
  document.querySelector(".btn.cos").addEventListener("click", function () {
    equals();
    result.textContent = Math.cos(result.textContent);
    operation = result.textContent;
  });
  document.querySelector(".btn.result").addEventListener("click", function () {
    equals();
  });
}

(function () {
  // From Keyboard Press
  key();
  // From Element Click
  btnClick();
})();
