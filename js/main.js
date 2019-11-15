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