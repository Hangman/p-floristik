document.addEventListener('DOMContentLoaded', function() {
  registerAccordionEventListener();
  openAccordionFromAnchor();
 }, false);

function registerAccordionEventListener() {
  $('.collapse').on('shown.bs.collapse', function (event) {
    var elementId = event.target.getAttribute('id');
    if (window.location.search == "?" + elementId) {
      window.history.replaceState({}, '', "?scrolled");
      event.target.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  });
}

function openAccordionFromAnchor() {
  var anchor = window.location.search;
  if (anchor) {
    var target = document.querySelector("#" + anchor.substring(1) + '.collapse');
    if (target) {
      $(target).collapse('show');
    }
  }
}
