$(document).ready(function() {
    $("[href = '#sheldure'], .main_btna, .main_btn").on("click", function(event) {
        event.preventDefault();
        $(".overlay").fadeIn("slow");
        $(".modal").slideDown("slow");
    });
    $(".modal .close").on('click', function(event) {
        event.preventDefault();
        $(".overlay").fadeOut("slow");
        $(".modal").slideUp("slow");
    });
});