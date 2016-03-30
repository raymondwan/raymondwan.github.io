var counter2 = 0, // to keep track of current slide
    $items2 = $('.diy-slideshow2 figure'), // a collection of all of the slides, caching for performance
    numItems2 = $items2.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent2 = function(){
    var itemToShow2 = Math.abs(counter2%numItems2);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
  $items2.removeClass('hashfig'); // remove .show from whichever element currently has it
  $items2.eq(itemToShow2).addClass('hashfig');    
};

// add click events to prev & next buttons 
$('.next2').on('click', function(){
    counter2++;
    showCurrent2(); 
});
$('.prev2').on('click', function(){
    counter2--;
    showCurrent2(); 
});

// if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
if('ontouchstart' in window){
  $('.diy-slideshow2').swipe({
    swipeLeft:function() {
      counter2++;
      showCurrent2(); 
    },
    swipeRight:function() {
      counter2--;
      showCurrent2(); 
    }
  });
}