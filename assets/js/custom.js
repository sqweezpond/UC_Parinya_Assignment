// Page loading animation
$(window).on('load', function() {
    if ($('.cover').length) {
        $('.cover').parallax({
            imageSrc: $('.cover').data('image'),
            zIndex: '1'
        });
    }

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function() {
        setTimeout(function() {
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});

// Scroll Page Change Header BG
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
        $("header").css("background", "#fff");
    } else {
        $("header").css("background", "transparent");
    }
});

AOS.init();