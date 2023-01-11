import image from "./resources/images/map.jpg";

function about() {
  const aboutUs = document.createElement("div");
  aboutUs.classList.add("aboutUs");

  const phone = document.createElement("p");
  phone.textContent = "Call us 📞: 42 42 42 42";

  const address = document.createElement("p");
  address.textContent = "Find us here:🏠";

  const location = document.createElement("img");
  location.src = image;

  aboutUs.appendChild(phone);
  aboutUs.appendChild(address);
  aboutUs.appendChild(location);

  return aboutUs;
}

function createAboutUs() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(about());
}

export default createAboutUs;
