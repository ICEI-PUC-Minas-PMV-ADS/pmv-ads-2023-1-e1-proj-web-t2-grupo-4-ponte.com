//Cria eventos das opções do menu Navbar
document.querySelector("#logo").onclick = function () {
  location.assign("./index.html");
};

document.querySelector("#vagas").onclick = function () {
  location.assign("./vagas.html");
};

document.querySelector("#dashboard").onclick = function () {
  location.assign("./dasboard.html");
};

document.querySelector("#search-button").onclick = function () {
  location.assign("./vagas.html");
};

//Cria eventos das opções do menu Dropdown
document.querySelector("#dropdownlist-perfil").onclick = function () {
  location.assign("./pagina-perfil.html");
};

document.querySelector("#dropdownlist-logout").onclick = function () {
  location.assign("./index.html");
};

//Cria evento do menu dropdown
document.querySelector("#foto").onclick = function () {
  document.querySelector("#menu-dropdown").classList.toggle("visivel");
};
