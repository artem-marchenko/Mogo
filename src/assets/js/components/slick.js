var reviews = $("#reviews")

reviews.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    speed: 500,
    autoplay: true,
    arrows: false
});

$("#reviews-arrow-prew").on("click", function(event) {
    event.preventDefault();

    reviews.slick('slickPrev')
})

$("#reviews-arrow-next").on("click", function(event) {
    event.preventDefault();
    
    reviews.slick('slickNext')
})