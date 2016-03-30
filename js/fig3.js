var counter3 = 0, // to keep track of current slide
    $items3 = $('.diy-slideshow3 figure'), // a collection of all of the slides, caching for performance
    numItems3 = $items3.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent3 = function(){
    var itemToShow3 = Math.abs(counter3%numItems3);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
  $items3.removeClass('webfig'); // remove .show from whichever element currently has it
  $items3.eq(itemToShow3).addClass('webfig');    
};

// add click events to prev & next buttons 
$('.next3').on('click', function(){
    counter3++;
    showCurrent3(); 
});
$('.prev3').on('click', function(){
    counter3--;
    showCurrent3(); 
});

// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
if('ontouchstart' in window){
  $('.diy-slideshow3').swipe({
    swipeLeft:function() {
      counter3++;
      showCurrent3(); 
    },
    swipeRight:function() {
      counter3--;
      showCurrent3(); 
    }
  });
}