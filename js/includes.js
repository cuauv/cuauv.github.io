$(document).ready(() => {
	$.get("assets/navbar.html", (d) => { $(".navbar.sticky").html(d); });
    $.get("assets/footer.html", (d) => { $(".footer").html(d); });
    $(window).scroll(() => {
        var theta = ($(window).scrollTop() / 200) % (2 * Math.PI);
        $('.site-logo-prop').css({
            transform: 'rotate(' + theta + 'rad)'
        });
    });
});