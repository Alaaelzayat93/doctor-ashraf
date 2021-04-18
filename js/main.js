/*global $,alert,console*/
$(function(){
  'use strict'
  //adjust header height
  $('.header').height($(window).height());
  $(window).resize(function(){
    $('.header').height($(window).height());
    $('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});
  });

//links active
$('.nav-link').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
});
//adjust bx slider
$('.slider').each(function(){
 $(this).css('paddingTop',($(window).height()-$('.slider li').height())/2);
});



/*owl*/
$('.slider').bxSlider({
  pager:false
});

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByclass("navbar").style.top = "0";
  } else {
    document.getElementByclass("navbar").style.top = "-50px";
  }
}*/
/*slider*/
 $(window).scroll(function(){
var navbar = $('.navbar');
if($(window).scrollTop() >= navbar.height()){
if(!navbar.hasClass('scrolled')){
navbar.removeClass('navbar-absolute').addClass('scrolled fixed-top');
} 
}else{
navbar.removeClass('scrolled navbar-fixed-top');
}
});
});
/*carousel*/
$('#plog-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 5,
      nav: true,
      // loop: false
    }
  }
});
/*2carousel*/
$('#courses-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false
    }
  }
});
/*3carousel*/
$('#course-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false
    }
  }
});
/*4carousel*/
$('#plogger-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false
    }
  }
});
/*5carousel*/
$('#media-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false
    }
  }
});
/*6carousel*/
$('#media2-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 4,
      nav: true,
      // loop: false
    }
  }
});
/*6carousel*/
$('#center-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 1,
      nav: false
    },
    1000: {
      items: 1,
      nav: true,
      // loop: false
    }
  }
});
/*7carousel*/
$('#media-center-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      // loop: false
    }
  }
});
/*7carousel*/
$('#courses3-carousel').owlCarousel({
  loop: true,
  margin: 10,
  autoplay:true,
  // nav:true,
  responsiveClass:true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: true,
      // loop: false
    }
  }
});

// Search Toggle
  
  $("#search").click(function(){
  $("#search-input-box").slideToggle();
});

  





