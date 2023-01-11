function home() {
  const frontHome = document.createElement("div");
  frontHome.classList.add("front-home");

  const homeHeader = document.createElement("h1");
  homeHeader.textContent = "Welcome";

  frontHome.appendChild(homeHeader);

  return frontHome;
}

function createHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(home());
}

export default createHome;
