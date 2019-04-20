var IMAGES_BREAKPOINT = 794;

window.onload = function() {
    document.getElementById("footer_year").innerHTML = new Date().getFullYear() + " ";
    if (location.pathname == "/" || location.pathname == "/index.html") {
        setGreeting();
    }
	resizeFix();
};

window.onresize = resizeFix;

function setGreeting() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "Good morning.";
    } else if (hour < 18) {
        greeting = "Good afternoon.";
    } else {
        greeting = "Good evening.";
    }
    document.getElementById("main_greeting").innerHTML = greeting;
}

function resizeFix() {
	var github = document.getElementById("social_github");
	if (window.innerWidth <= 794) {
		// Move github below the avatar image
		github.parentElement.insertBefore(document.getElementById("avatar"), github);
	} else {
		github.parentElement.insertBefore(github, document.getElementById("avatar"));
	}
}