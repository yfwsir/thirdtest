$('li').on('mouseenter',function(){
    // console.log(1)
    $('li').stop()
    $(this).animate({top:-5},200).siblings().animate({top:0},200);
    $(this).children('p').animate({bottom:0},300)
})
$('li').on('mouseleave',function(){
    // console.log(1)
    $('li').stop()
    $(this).animate({top:0},200).siblings().animate({top:0},200);
    $(this).children('p').animate({bottom:-50},300)
})