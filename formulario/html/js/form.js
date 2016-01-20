
function $(id) {
	return document.getElementById(id);
}

$("acept_cookie").addEventListener("click",hide,false);
$("name").addEventListener("keyup",name,false);
$("surname").addEventListener("keyup",surname,false);
$("pass").addEventListener("keyup",pass,false);
$("conf_pass").addEventListener("keyup",conf_pass,false);
$("country").addEventListener("change",country,false);


function hide() {
	$("cookie_form").style.display = "none";
}
function name() {
	var patt = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/,
		valid = patt.test($("name").value);
		if (valid) {
			$("name").setCustomValidity("");
		} else {
			$("name").setCustomValidity("Invalid field.");
		}
}
function surname() {
	var patt = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/,
		valid = patt.test($("surname").value);
		if (valid) {
			$("surname").setCustomValidity("");
		} else {
			$("surname").setCustomValidity("Invalid field.");
		}
}
function pass() {
	var patt =/(?=^.{6,255}$)((?=.*\d)(?=.*\s)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*\s)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*\s)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/,
		valid = patt.test($("pass").value);
		if (valid) {
			$("pass").setCustomValidity("");
		} else {
			$("pass").setCustomValidity("Invalid field.");
		}
}
function conf_pass() {
	var pass = $("pass").value,
		conf_pass = $("conf_pass").value;
		if (pass === conf_pass) {
			$("conf_pass").setCustomValidity("");
		} else {
			$("conf_pass").setCustomValidity("Invalid field.");
		}
}
function country() {
	var selected = $("country").selectedIndex;
	if (selected === 0) {
		$("spain").style.display = "block";
	} else {
		$("spain").style.display = "none";
	}
}
