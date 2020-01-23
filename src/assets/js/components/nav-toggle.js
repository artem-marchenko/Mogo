$("#nav-toggle").on("click", function() {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");


});

$("#nav a").on("click", function(event) {
    $("#nav").removeClass("active");
    $("#nav-toggle").removeClass("active");
})