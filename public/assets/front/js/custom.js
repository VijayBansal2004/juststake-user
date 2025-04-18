(function ($) {
  "use strict";
  function preloaderLoad() {
    if ($(".preloader").length) {
      $(".preloader").delay(200).fadeOut(300);
    }
    $(".preloader_disabler").on("click", function () {
      $("#preloader").hide();
    });
  }

  /** Main Menu Custom Script Start **/
  $(document).on("ready", function () {
    $("#respMenu").aceResponsiveMenu({
      resizeWidth: "768", // Set the same in Media query
      animationSpeed: "fast", //slow, medium, fast
      accoridonExpAll: false, //Expands all the accordion menu on click
    });
  });

  /* ----- This code for menu ----- */
  $(window).on("scroll", function () {
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }
    if ($(".stricky").length) {
      var headerScrollPos = $(".header-navigation").next().offset().top;
      var stricky = $(".stricky");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.removeClass("slideIn animated");
        stricky.addClass("stricky-fixed slideInDown animated");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed slideInDown animated");
        stricky.addClass("slideIn animated");
      }
    }
  });

  /* ----- Mobile Nav ----- */
  // document.addEventListener("DOMContentLoaded", () => {
  //   new Mmenu(
  //     "#menu",
  //     {
  //       navbar: {
  //         title: "Menu",
  //       },
  //       searchfield: {
  //         add: false,
  //         addTo: "#contacts",
  //       },
  //       offCanvas: {
  //         position: "left-front",
  //       },
  //     },
  //     {}
  //   );
  // });

  /* ----- Scroll To top ----- */
  function scrollToTop() {
    var btn = $(".scrollToHome");
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });
    btn.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        "300"
      );
    });
  }

  /*----------- Addclass Remove Class for Home 2 Accordion ----------*/
  (function ($) {
    $(
      ".accordion-style1 .accordion-item, .accordion-style1.style2 .accordion-item, .accordion-style2 .accordion-item"
    ).on("click", function () {
      $(this).toggleClass("active", 1000);
    });
  })(jQuery);

  $(document).on("ready", function () {
    scrollToTop();
  });

  $(window).on("load", function () {
    preloaderLoad();
    // Restonsive custom menu

    const menu = document.querySelector("#menu");
    const menubar = document.querySelector(".menubar");
    const links = document.querySelectorAll("#menu ul li a");
    const body = document.body;

    // if (!menu || !menubar) return;

    const toggleMenu = (show) => {
      menu.classList.toggle("active", show);
      body.classList.toggle("mob-menu-open", show);
    };

    menubar.addEventListener("click", (e) => {
      e.preventDefault();
      toggleMenu(true);
    });

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // remove this if you want normal navigation
        toggleMenu(false);
      });
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && !menubar.contains(e.target)) {
        toggleMenu(false);
      }
    });
  });
})(window.jQuery);
