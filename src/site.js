import createAboutUs from "./about.js";
import createHome from "./home.js";

function makeHeader() {
  const header = document.createElement("div");
  const headerLogo = document.createElement("div");

  header.classList.add("header");
  headerLogo.classList.add("headerLogo");
  headerLogo.textContent = "AWESOME FOOD";

  header.appendChild(headerLogo);

  return header;
}

function makeNav() {
  const navBar = document.createElement("div");
  navBar.classList.add("navBar");

  const homebtn = document.createElement("button");
  homebtn.classList.add("nav-buttons");
  homebtn.textContent = "Home";
  homebtn.addEventListener("click", () => {
    createHome();
  });

  const menubtn = document.createElement("button");
  menubtn.classList.add("nav-buttons");
  menubtn.textContent = "Menu";

  const aboutbtn = document.createElement("button");
  aboutbtn.classList.add("nav-buttons");
  aboutbtn.textContent = "About";
  aboutbtn.addEventListener("click", () => {
    createAboutUs();
  });

  navBar.appendChild(homebtn);
  navBar.appendChild(menubtn);
  navBar.appendChild(aboutbtn);

  return navBar;
}

function makeMain() {
  const main = document.createElement("main");
  main.setAttribute("id", "main");

  return main;
}

function loadSite() {
  const content = document.getElementById("content");

  content.appendChild(makeHeader());
  content.appendChild(makeNav());
  content.appendChild(makeMain());
}

export default loadSite();
