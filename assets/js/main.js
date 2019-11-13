$( document ).ready(function() {

    $(".lang-choose").click("on", function(){
        $(this).toggleClass("active");
        $(".footer-content").toggleClass("active");
    })

    $("#video")[0].autoplay = true;
    $("#video")[0].play();
    $("#video").attr('autoplay', true);
    $("#video").trigger('play');
});