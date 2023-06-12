
const logo = document.getElementById("logo");


logo.addEventListener("click", () => { 
  window.location.href = "navbar.html";
});

const wrapperNavbar = document.querySelector(".wrapperNavbar");

wrapperNavbar.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    const href = li.getAttribute("href");
    window.location.href = href;
  });
});

const containerCard = document.querySelector(".containerCard");

containerCard.querySelector("button").addEventListener("click", () => {
  const email = document.querySelector("input[type=text]").value;
  const password = document.querySelector("input[type=password]").value;

  if (email && password) {
  } else {
    alert("Please enter your e-mail and password.");
  }
});

