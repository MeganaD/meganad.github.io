$(function(){
    $( "body" ).on( "swipeleft", swipeleftHandler );
    $( "body" ).on( "swiperight", swiperightHandler );

    function swipeleftHandler( event ){
        var nextPage = document.querySelectorAll('li.next>a')[0];
        if(nextPage) window.location.href = nextPage.href;
    }
    function swiperightHandler( event ){
        var prevPage =  document.querySelectorAll('li.previous>a')[0];
        if(prevPage) window.location.href = prevPage.href;
    }
});
