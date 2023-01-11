function about() {
  const aboutUs = document.createElement("div");
  aboutUs.classList.add("aboutUs");

  const phone = document.createElement("p");
  phone.textContent = "42 42 42 42";

  const location = document.createElement("p");
  location.textContent = "tempstreet 44";

  aboutUs.appendChild(phone);
  aboutUs.appendChild(location);

  return aboutUs;
}

function createAboutUs() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(about());
}

export default createAboutUs;
