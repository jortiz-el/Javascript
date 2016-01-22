
var NAME = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/,
	SURNAME = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/,
	PASS = /(?=^.{6,255}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,  
	EMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
	WEBSITE = /^[a-z]{2,}:([0-9]+|\/\/){1}[^\s-]*$/i,
	POSTCODE = /^([0-4][0-9]{4}|[5][0-2][0-9]{3})$/;

function events(){
	function $(id) {
		return document.getElementById(id);
	}
	$("acept_cookie").addEventListener("click",hide,false);
	$("name").addEventListener("keyup",function(){validInput(NAME,$("name"));},false);
	$("surname").addEventListener("keyup",function(){validInput(SURNAME,$("surname"));},false);
	$("pass").addEventListener("keyup",function(){validInput(PASS,$("pass"));},false);
	$("conf_pass").addEventListener("keyup",conf_pass,false);
	$("country").addEventListener("change",country,false);
	$("email").addEventListener("keyup",function(){validInput(EMAIL,$("email"));},false);
	$("website").addEventListener("keyup",function(){validInput(WEBSITE,$("website"));},false);
	$("post_code").addEventListener("keyup",function(){validInput(POSTCODE,$("post_code"));},false);
	checkcookie();
function hide() {
	$("cookie_form").style.display = "none";
}
function validInput(patt,id) {
	var valid = patt.test(id.value);
		if (valid || (!(id.attributes["required"]) && id.value === "")) {
			id.setCustomValidity("");
		} else {
			id.setCustomValidity("Invalid field.");
		}
}
function conf_pass() {
	var pass = $("pass").value,
		conf_pass = $("conf_pass").value;
	$("conf_pass").setCustomValidity(pass === conf_pass?"":"Invalid field.");
}
function country() {
	var selected = $("country").selectedIndex;
	if (selected === 0) {
		$("spain").style.display = "block";
	} else {
		$("spain").style.display = "none";
	}
}
function checkcookie() {
	var valid = document.cookie;
	$("cookie_form").style.display = (valid !== "")?"none":"block";
}
}
window.onload = events;

