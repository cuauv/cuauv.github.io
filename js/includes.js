$(document).ready(() => {
	$.get("assets/navbar.html", (d) => {
		$(".navbar.sticky").html(d);
		console.log("loaded navbar");
	});
	$.get("assets/footer.html", (d) => {
		$(".footer").html(d);
		console.log("loaded footer");
	});
	$.get("assets/hamburger.html", (d) => {
		$(".hamburger-menu").html(d);
		var buttonClicked = false;		
		$("#hamburger-button").click(function() {
		  console.log("clicked");
		  if (!buttonClicked) {
			$("#ham-menu").slideDown();
			buttonClicked = true;
		  } else {
			$("#ham-menu").slideUp();
			buttonClicked = false;
		  }
		});
	});
	$(window).scroll(() => {
		var theta = ($(window).scrollTop() / 200) % (2 * Math.PI);
		$('.site-logo-prop').css({
			transform: 'rotate(' + theta + 'rad)'
		});
	});
	//hide if screen too big
	$(window).resize(function() {
		var windowsize = $(window).width();
		if (windowsize > 999) {
			console.log("hiding");
			$("#ham-menu").hide();
		}
	});
	console.log("including");
});