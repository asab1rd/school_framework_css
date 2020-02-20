// $(function() {
//   $(document).tooltip();
// });
const navbar = document.getElementById("navbarSupportedContent");
const navbarTogler = document.getElementById("navbarToggler");
const dropdown = document.getElementById("navbarDropdown");
const dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
dropdown.onclick = e => {
  dropdownMenu.classList.toggle("show");
};
navbarTogler.onclick = e => {
  navbar.classList.toggle("show");
};
