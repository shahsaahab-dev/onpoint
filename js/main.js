// Console Log Custom Message 
var text = "Theme Name: OnPoint by Three Cheetahs <br>";
var text2 = "Developer: Syed Naqi Ali Shah";
console.log(text + text2);
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



// Slick Slider Product Details Page
$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows:true,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
       }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// Product Variation Buttons 
jQuery('.variation button').click(function(){
    jQuery('.variation button').toggleClass('active-variation');
})