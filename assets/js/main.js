function bankingContent(evt, tabs) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabs).style.display = 'block';
  evt.currentTarget.className += " active";
}


$('.owl-carousel.review_carousel').owlCarousel({
  navigation: true,
  navigationText: ["", ""],
  pagination: true,
  loop: true,
  margin: 40,
  slideSpeed: 800,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 10
    },
    350: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 5
    },
    600: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 5
    },
    1000: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: true
    },
    1200: {
      items: 1,
      nav: true,
      loop: true,
      autoplay: true
    },
  }
});


$('.owl-carousel').owlCarousel({
  navigation: true,
  navigationText: ["", ""],
  pagination: true,
  loop: true,
  margin: 40,
  slideSpeed: 800,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 10
    },
    350: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 5
    },
    600: {
      items: 1,
      nav: false,
      loop: true,
      autoplay: false,
      margin: 5
    },
    1000: {
      items: 2,
      nav: false,
      loop: true,
      autoplay: true
    },
    1200: {
      items: 3,
      nav: true,
      loop: true,
      autoplay: true
    },
  }
});






//  scroll-up   //

$(document).ready(function () {


  $(window).scroll(function () {

    if ($(this).scrollTop() > 100) {

      $('.back-btn').fadeIn();

    } else {

      $('.back-btn').fadeOut();

    }

  });


  $('.back-btn').click(function () {

    $("html, body").animate({

      scrollTop: 0

    }, 1000);

    return false;

  });


});


$(document).ready(function () {
  $("#navbarDropdown").click(function () {
    $(".dropdown-menu.mb-nav").toggleClass("show");
  });
});

$(document).ready(function () {
  $(".btn-close").click(function () {
    $(".dropdown-menu.mb-nav").removeClass("show");
  });
});