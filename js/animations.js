$('nav a').click(function(e){
    e.preventDefault();

    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top,
    menuHeight = $('header').innerHeight();
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 1000);
    
});

debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

(function(){
var $target = $('.anime'), animationClass = 'anime-start';
var offset = $(window).height() * 3/4;

function animeScroll(){
    var documentTop = $(document).scrollTop();
    
    $target.each(function(){
        var itemTop = $(this).offset().top;
        if(documentTop > itemTop - offset)
        {
            $(this).addClass(animationClass);
        }
    })
}
animeScroll();
$(document).scroll(debounce(function(){
    animeScroll();
},100));

}());
