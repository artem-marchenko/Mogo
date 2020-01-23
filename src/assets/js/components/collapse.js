

$("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this);
         wedoId = $this.data('collapse');

    $(wedoId).slideToggle();

})