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

// Plugin For Modal
$(function() {
  $.fn.modal = function(state) {
    console.log($(this));
    if (state === "show") {
      $(this).show();
    } else if (state === "hide") {
      $(this).hide();
    }
  };

  $("button").click(function() {
    if ($(this).attr("data-target")) {
      const target = $(this).attr("data-target");
      $(target).modal("show");
    } else if ($(this).attr("data-dismiss")) {
      const dismiss = $(this).attr("data-dismiss");
      $(dismiss).modal("hide");
    }
  });
});
