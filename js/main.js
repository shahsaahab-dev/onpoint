
// Start Mobile menu Code
//Open Overlay when Clicked on SearchBar
jQuery(".search-custom").click(function(){
    jQuery(".overlay").addClass("active");
});

// Close Overlay
jQuery(".overlay").click(function(){
    jQuery(".overlay").removeClass("active");
});

// Open Menu With Click 
jQuery(".mobile-menu-btn").click(function(){
    jQuery(".menu-mobile").addClass("open-menu");
    jQuery(".mobile-menu-btn").hide();
    jQuery(".close-menu-btn").addClass("display-btn");
});

jQuery(".close-menu-btn").click(function(){
    jQuery(".menu-mobile").removeClass("open-menu");
    jQuery(".close-menu-btn").removeClass("display-btn");
    jQuery(".mobile-menu-btn").show();
});

// End Mobile Menu code

// Activating Sticky navbar on Scroll 
jQuery(window).scroll(function() {
    var height = jQuery(window).scrollTop();

    if(height  > 30) {
        jQuery('.main-navigation').addClass('nav-active');
    }

    if(height < 30){
        jQuery('.main-navigation').removeClass('nav-active');
    }
});