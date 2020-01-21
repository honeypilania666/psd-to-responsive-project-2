$(document).ready(function(){
    $('#videolink').magnificPopup({
        type:'inline',
        midClick:true
    });

 
});

$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    smartSpeed:400,
    autoplayHoverPause:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
});

$(function(){
    $("#progress-elements").waypoint(function(){
        $(".progress-bar").each(function(){
            $(this).animate({
                width:$(this).attr("aria-valuenow") + "%"
            },2000);
        });
        this.destroy();
    
    {
        offset:'bottom-in-view';
    }
    });
});






