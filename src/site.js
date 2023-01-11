import createAboutUs from "./about.js";

function header() {
  const header = document.createElement("div");
  const headerLogo = document.createElement("div");

  header.classList.add("header");
  headerLogo.classList.add("headerLogo");
  headerLogo.textContent = "AWESOME FOOD";

  header.appendChild(headerLogo);

  return header;
}

function nav() {
  const navBar = document.createElement("div");
  const homebtn = document.createElement("button");
  const menubtn = document.createElement("button");
  const aboutbtn = document.createElement("button");

  navBar.classList.add("navBar");

  homebtn.classList.add("nav-buttons");
  menubtn.classList.add("nav-buttons");
  aboutbtn.classList.add("nav-buttons");

  homebtn.textContent = "Home";
  homebtn.addEventListener("click", () => {
    createAboutUs();
  });

  menubtn.textContent = "Menu";
  aboutbtn.textContent = "About";

  navBar.append(homebtn, menubtn, aboutbtn);

  return navBar;
}

function main() {
  const main = document.createElement("div");
  main.setAttribute("id", "main");
  main.textContent = " ";

  return main;
}

function loadSite() {
  content = document.getElementById("content");
  content.appendChild(header());
  content.appendChild(nav());
  content.appendChild(main());
}

export default loadSite();
