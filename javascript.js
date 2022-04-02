let BTN = document.getElementById("MenuButton");

let Menu_Screen = document.getElementById("MenuScreen");

BTN.addEventListener("click", function () {
  if (Menu_Screen.style.width == "0vw") {
    Menu_Screen.style.width = "100vw";
  } else {
    Menu_Screen.style.width = "0vw";
  }
});
