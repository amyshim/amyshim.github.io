function jumpTo(href){
    console.log("jump");
    $('html,body').animate({
        scrollTop: $(href).offset().top},
        'slow');
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  // myFunction()
  floatOutline();
  highlight();
};

window.onload = function() {
  floatOutline();  
}

// // Get the navbar
// var navbar = $("#outline");

// // Get the offset position of the navbar
// var sticky = 200;

// // Add the sticky class to the navbar when you reach its scroll position. 
// // Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.addClass("sticky");
//   } else {
//     navbar.removeClass("sticky");
//   }
// }

function floatOutline(){
  var menu_bottom = 80;
  var outline = $("#outline");
  var top = outline.next()[0].getBoundingClientRect().top;;
  if (top + outline[0].offsetHeight + menu_bottom > window.innerHeight){
    outline.css("top",top);
  } else {
    outline.css("top",window.innerHeight - (outline[0].offsetHeight+menu_bottom));
  }
}

function highlight(){

  // var top_of_element = $(".highlight").offset().top;
  // var bottom_of_element = $(".highlight").offset().top + $(".highlight").outerHeight();
  // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
  // var top_of_screen = $(window).scrollTop();

  // if ((bottom_of_screen - 50 > bottom_of_element) && (top_of_screen + 50 < top_of_element)){
  //     // the element is visible, do something
  //     console.log("true",bottom_of_screen, bottom_of_element);
  //     $(".highlight").delay( 2000 ).css("background-color","#FFE4AA");
  // } else {
  //     // the element is not visible, do something else
  //     $(".highlight").css("background-color","white");
  // }
}