(function ($) {

  /*
        Function to hide navbar when scroll down and show navbar when scroll up.
    */
  var firstypos = window.pageYOffset;
  $(window).scroll(function () {
    var currentypos = window.pageYOffset;
    if (currentypos === 0) {
      $(".fixed-top").fadeIn();
      $(".fixed-top").css("background-color", "#fafafa");
    } else if (firstypos > currentypos) {
      $(".fixed-top").fadeIn();
      $(".fixed-top").css("background-color", "#fafafa");
    } else {
      $(".fixed-top").fadeOut();
    }
    firstypos = currentypos;
  });

  /*
        Animation for webpage
    */
  $(window).on("load", function () {
    $(".navbar-brand").css("visibility", "visible").hide(0).delay(600).fadeIn();
    $(".fixed-top").css("visibility", "visible").hide(0).delay(600).fadeIn();
    $("#title .1").css("visibility", "visible").hide(0).delay(800).slideDown();
    $("#title .2").css("visibility", "visible").hide(0).delay(800).slideDown();
    $("#title .3").css("visibility", "visible").hide(0).delay(800).slideDown();
    $("#title .4").css("visibility", "visible").hide(0).delay(800).slideDown();
    $("#title .5").css("visibility", "visible").hide(0).delay(800).slideDown();

    $("#title .principal")
      .css("visibility", "visible")
      .hide(0)
      .delay(1300)
      .fadeIn();
    $("#title .header")
      .css("visibility", "visible")
      .hide(0)
      .delay(1400)
      .fadeIn();
    $("#title .description")
      .css("visibility", "visible")
      .hide(0)
      .delay(1500)
      .fadeIn();
    $("#title .paragraph")
      .css("visibility", "visible")
      .hide(0)
      .delay(1600)
      .slideDown();


    var width = $(window).width();
    if (width < 700) {
      $(".container-nav").hide(0);
    } else {
      $(".container-nav")
        .css("visibility", "visible")
        .hide(0)
        .delay(2200)
        .fadeIn();
    }
    if (width > 700) {
      $(".navbar-toggler").hide(0);
    } else {
      $(".navbar-toggler")
        .css("visibility", "visible")
        .hide(0)
        .delay(600)
        .fadeIn();
    }

    $("#about .title")
      .css("visibility", "visible")
      .hide(0)
      .delay(2200)
      .fadeIn();
    $("#about .subtittle")
      .css("visibility", "visible")
      .hide(0)
      .delay(2200)
      .fadeIn();
    $("#about .standard-p")
      .css("visibility", "visible")
      .hide(0)
      .delay(2400)
      .fadeIn();
    $("#about img").css("visibility", "visible").hide(0).delay(2600).fadeIn();
    $("#about ul").css("visibility", "visible").hide(0).delay(2800).fadeIn();
    $("#portfolio").css("visibility", "visible").hide(0).delay(2800).fadeIn();
    $("#workExperience").css("visibility", "visible").hide(0).delay(2800).fadeIn();
    $("#education").css("visibility", "visible").hide(0).delay(2800).fadeIn();
    $("#awards").css("visibility", "visible").hide(0).delay(2800).fadeIn();
    $("#contact").css("visibility", "visible").hide(0).delay(2800).fadeIn();
  });

})(jQuery);
