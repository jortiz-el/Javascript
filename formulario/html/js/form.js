
function $(id) {
	return document.getElementById(id);
}

$("acept_cookie").addEventListener("click",hide,false);

function hide() {
	$("cookie_form").style.display = "none";
}
