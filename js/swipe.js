$(function(){
    $("body").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            console.log("You swiped " + direction );
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            console.log("You swiped " + direction );
        },
      });
});

