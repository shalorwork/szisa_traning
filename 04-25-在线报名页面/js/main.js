window.onload = function() {
	var input_Number = document.getElementById("input_number");
	var input_Phone = document.getElementById('input_phone')
	var button_Inquiry = document.getElementById('button_inquiry')
	if(input_Number){
		input_Phone.addEventListener('input', function() {
			check();
			xxr();
		});
		input_Number.addEventListener('input', function() {
			check2();
			xxr();
		});
		
	} else {
		input_Phone.addEventListener('input', function() {
			check();
			xr();
		});
		button_Inquiry.addEventListener("click", function() {
			loadJSON();
		});
	}

}

function xxr(){
	var a = document.getElementById("input_phone").value;
	var b = document.getElementById("input_number").value;
	var PhoneNumber = /^1\d{10}$/;
	var Number = /^1\d{9}$/;
	
	if (PhoneNumber.test(a)&&Number.test(b)) {
		document.getElementById("button_inquiry").disabled = false;
	} else{
		document.getElementById('button_inquiry').disabled = true;
	}
}
function xr(){
	var PhoneNumber = /^1\d{10}$/;
	var a = document.getElementById("input_phone").value;
	(PhoneNumber.test(a))?(document.getElementById("button_inquiry").disabled = false):(document.getElementById('button_inquiry').disabled = true);
	
}

function check() {
	var PhoneNumber = /^1\d{10}$/;
	var a = document.getElementById("input_phone").value;
	if (PhoneNumber.test(a)) {
		document.getElementById("error").innerHTML = "";
	} else if (a == "") {
		document.getElementById("error").innerHTML = "手机号不能为空！";
	} else {
		document.getElementById("error").innerHTML = "手机号码格式不正确，请重新输入!";
	}
}

function check2() {
	var Number = /^1\d{9}$/;
	var b = document.getElementById("input_number").value;
	if (Number.test(b)) {
		document.getElementById("error").innerHTML = "";
	} else if (b == "") {
		document.getElementById("error").innerHTML = "学号不能为空！";
	} else {
		document.getElementById("error").innerHTML = "学号格式不正确，请重新输入!";
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
