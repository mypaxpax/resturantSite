function menu() {
  const ourMenu = document.createElement("div");
  ourMenu.classList.add("menu");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Here's our menu:";

  ourMenu.appendChild(menuHeader);

  return ourMenu;
}

function createMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(menu());
}

export default createMenu;
