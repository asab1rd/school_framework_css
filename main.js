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

      $(target)
        .click(function(e) {
          $(target).modal("hide");
        })
        .children()
        .click(function() {
          return false;
        });
    } else if ($(this).attr("data-dismiss")) {
      const dismiss = $(this).attr("data-dismiss");
      $(dismiss).modal("hide");
    }
  });
});

// TABS Control
$(".nav-link").click(function(e) {
  e.preventDefault();
  if ($(this).attr("data-toggle") === "tab") {
    const tabId = $(this).attr("aria-controls");
    $(".tab-pane, .nav-link").removeClass("active");
    $("#" + tabId).addClass("active");
    $(this).addClass("active");
  }
});
