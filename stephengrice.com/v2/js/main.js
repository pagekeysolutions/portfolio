var TRANSITION_SPEED = 700;

$(document).ready(function() {
	// Sticky nav links
	var links = $(".links");
	var portfolio = $("#portfolio");
	var wdw = $(window)

	// Add scrolling
	$("#nav_portfolio").click(function() {
		$('html, body').animate({
			scrollTop: $("#portfolio").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
	$("#nav_top").click(function() {
		$('html, body').animate({
			scrollTop: $("#top").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
	$("#nav_resume").click(function() {
		$('html, body').animate({
			scrollTop: $("#resume").offset().top
		}, TRANSITION_SPEED);
		return false;
	});
	
	responsiveStyle();
	// Responsive check
	wdw.resize(function() {
		responsiveStyle();
	});
});

function responsiveStyle() {
	console.log("isMobile(): " + isMobile() + " viewport: " + $(window).width());
	if (isMobile()) {
		$("#nav_top").insertBefore("#nav_portfolio");
	} else {
		$("#nav_portfolio").insertBefore("#nav_top");
	}
}

function isMobile() {
	return $("#mobile").css("visibility") == "visible";
}