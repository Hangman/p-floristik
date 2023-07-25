document.addEventListener('DOMContentLoaded', function() {
    openAccordionFromAnchor();
 }, false);

function openAccordionFromAnchor() {
  var anchor = window.location.hash;
  if (anchor) {
    var target = $(anchor + '.collapse');
    if (target.length) {
      target.addClass('show');
    }
  }
}