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

//tooltip
$(".tooltip").hover(function() {
  const title = $(this).attr("title");
  $(this)
    .removeAttr("title")
    .attr("data-title", title);
  $(this).mouseleave(function() {
    $(this)
      .removeAttr("data-title")
      .attr("title", title);
  });
});

// My element on viewport
$.fn.isOnScreen = function() {
  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft(),
  }; // LEFT AND RIGHT VIEW
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  // My ELEMENT Overflow X or Y
  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(
    viewport.right < bounds.left ||
    viewport.left > bounds.right ||
    viewport.bottom < bounds.top ||
    viewport.top > bounds.bottom
  );
};
// let activeSectionId = 0;
// const sections = $(".pile-section");
// let activeSection = sections[activeSectionId];
// activeSection.classList.add("active");
// const winHeight = $(window).height();
// $("body").scroll(function() {
//   // $(".pile-section")[active].classList.add("active");
//   // console.log($(this).scrollTop(), activeSection.offsetHeight);

//   if ($(this).scrollTop() > 10 + winHeight * activeSectionId) {
//     $(".pile-section").removeClass("active");
//     activeSectionId =
//       sections.length === activeSectionId + 1 ? 0 : activeSectionId + 1;
//     activeSection = sections[activeSectionId];
//     activeSection.classList.add("active");
//     $(this).scrollTop(winHeight * activeSectionId);
//   }
// });
