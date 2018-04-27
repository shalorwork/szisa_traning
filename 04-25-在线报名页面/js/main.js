function check() {
	var PhoneNumber = /^1\d{10}$/;
	var a = document.getElementById("input_phone").value;
	if (PhoneNumber.test(a)) {
		document.getElementById("error").innerHTML = "";
		document.getElementById("button_inquiry").disabled = false;
	} else if (a == "") {
		document.getElementById("error").innerHTML = "手机号不能为空！";
		document.getElementById('button_inquiry').disabled = true;
	} else {
		document.getElementById("error").innerHTML = "手机号码格式不正确，请重新输入!";
		document.getElementById('button_inquiry').disabled = true;
	}
}

function check() {
	var Number = /^1\d{9}$/;
	var b = document.getElementById("input_number").value;
	if (Number.test(b)) {
		document.getElementById("error").innerHTML = "";
		document.getElementById("button_inquiry").disabled = false;
	} else if (b == "") {
		document.getElementById("error").innerHTML = "学号不能为空！";
		document.getElementById('button_inquiry').disabled = true;
	} else {
		document.getElementById("error").innerHTML = "学号格式不正确，请重新输入!";
		document.getElementById('button_inquiry').disabled = true;
	}
}

function loadJSON() {
	var a = document.getElementById("input_phone").value;
	var url = "http://teach.sxisa.com/api/signup/phone/" + a;
	var http_request = new XMLHttpRequest();
	try {
		http_request = new XMLHttpRequest();
	} catch (e) {
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				alert("Your browser broke!");
				return false;
			}
		}
	}
	http_request.onreadystatechange = function () {
		if (http_request.readyState == 4) {
			var jsonObj = JSON.parse(http_request.responseText);
			var result = jsonObj.data.result;
			if(result == 1) {
				document.getElementById("error").innerHTML = "恭喜你已被录取！";
			} else if(result == 0) {
				document.getElementById("error").innerHTML = "没有录取，请再接再厉!";
			}else{
				document.getElementById("error").innerHTML = "该手机号不存在";
			}
		}
	}
	http_request.open("GET", url, true);
	http_request.send();
}
document.getElementById('input_phone').addEventListener('input', function () {
	check();
});
document.getElementById("button_inquiry").addEventListener("click", function () {
	loadJSON();
});
document.getElementById('input_number').addEventListener('input', function () {
	check();
});