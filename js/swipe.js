function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

$(function(){
    if(isMobile()){
        $("body").swipe( {
            swipeLeft:function(event, direction, distance, duration, fingerCount) {
                var nextPage = document.querySelectorAll('li.next>a')[0];
                if(nextPage) window.location.href = nextPage.href;
            },
            swipeRight:function(event, direction, distance, duration, fingerCount) {
                var prevPage =  document.querySelectorAll('li.previous>a')[0];
                if(prevPage) window.location.href = prevPage.href;
            },
            threshold:160
        });
        document.querySelectorAll('div.swipeNotice')[0].style.display = 'block';
    }
});
