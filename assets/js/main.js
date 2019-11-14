$(function(){
    /*
    * Replace all SVG images with inline SVG
    */
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$( document ).ready(function() {

    $(".lang-choose").click("on", function(){
        $(this).toggleClass("active");
        $(".footer-content").toggleClass("active");
    })

    $("#video")[0].autoplay = true;
    $("#video")[0].play();
    $("#video").attr('autoplay', true);
    $("#video").trigger('play');


    // ---------------navigation active-------------------
    var width = $(".active-nav-link").outerWidth();
    var offset = $(".active-nav-link").position();
    var left= offset.left; 
    $(".header-left-navigation").children("ul").append("<div class='active-border'><div>");
    $(".active-border").css({ "left" : (left+(width/2)-5)});
    
    $(".header-left-navigation").children("ul").find("li").mouseover("on", function(){
        $(this).siblings().removeClass("active-nav-link");
        $(this).addClass("active-nav-link");
        var width = $(this).outerWidth();
        var offset = $(this).position();
        var left= offset.left; 
        $(".active-border").css({ "left" : (left+(width/2)-5)});
        $(".header-left-navigation").children("ul").find(".svg").addClass("disable-svg");
    })

    $(".header-left-navigation").mouseleave("on", function(){
        $(".nav-li").removeClass("active-nav-link");
        $(this).children("ul").find("li").first().addClass("active-nav-link");
        var width = $(".active-nav-link").outerWidth();
        var offset = $(".active-nav-link").position();
        var left= offset.left;
        $(".active-border").css({ "left" : (left+(width/2)-5)});
        $(".active-nav-link").find(".svg").removeClass("disable-svg");
    })

});

$(".header-shop").children("ul").find("li").mouseover("on", function(){
    $(this).find(".svg").removeClass("disable-svg");
})
$(".header-shop").children("ul").find("li").mouseleave("on", function(){
    $(this).find(".svg").addClass("disable-svg");
})
$(".header-search-btn").find("button").mouseover("on", function(){
    $(this).find(".svg").removeClass("disable-svg");
})
$(".header-search-btn").find("button").mouseleave("on", function(){
    $(this).find(".svg").addClass("disable-svg");
})
$(".header-navigation").find(".svg").addClass("disable-svg");
$(".active-nav-link").find(".svg").removeClass("disable-svg");