function header() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const headerLogo = document.createElement("div");

  header.classList.add("header");

  headerLogo.classList.add("headerLogo");
  headerLogo.textContent = "AWESOME FOOD";

  header.appendChild(headerLogo);
  content.append(header);
}

export default header;
