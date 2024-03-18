(function ($) {
    "use strict";

    // ------- Prealoder ------
    $(window).on('load', function () {
        $("#preloader").delay(300).fadeOut("slow");
    });


    $(document).ready(function () {


        $('.header_slider_wrap_main').owlCarousel({
            loop: true,
            items: 1,
            nav: false,
            dots: true,
            autoWidth: false,
            smartSpeed: 500,
            margin: 0,
            animateOut: 'fadeOut', // Use fadeOut animation
            animateIn: 'fadeIn',   // Use fadeIn animation
            mouseDrag: false,       // Allow mouse drag
            touchDrag: false,       // Allow touch drag
            dragEndSpeed: 350,     // Speed of the custom drag animation
            autoplay: true,        // Enable autoplay
            autoplayTimeout: 3000, // Set autoplay timeout in milliseconds
            autoplayHoverPause: true, // Pause autoplay on hover
        });
        


    });

})(jQuery);