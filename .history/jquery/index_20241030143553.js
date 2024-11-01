AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init", 
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 1500,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

$(document).ready(function () {
  $(".features-item").on("mouseover", function () {
    $(".features-item").removeClass("active");
    $(this).addClass("active");
  });
});
