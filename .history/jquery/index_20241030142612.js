AOS.init();

$(document).ready(function () {
  $(".features-item").on("mouseover", function () {
    $(".features-item").removeClass("active");
    $(this).addClass("active");
  });
});
