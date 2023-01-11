function nav() {
  const content = document.querySelector("#content");
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
    console.log("button worked");
  });

  menubtn.textContent = "Menu";
  aboutbtn.textContent = "About";

  navBar.append(homebtn, menubtn, aboutbtn);
  content.append(navBar);
}

export default nav;
