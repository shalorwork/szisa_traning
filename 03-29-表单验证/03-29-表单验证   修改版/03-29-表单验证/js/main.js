function check() {
	var PhoneNumber = /^1\d{10}$/;
	var a = document.getElementById("input_phone").value;
	if (PhoneNumber.test(a)) {
		document.getElementById("button_inquiry").disabled = false;

	} else if (a == "") {
		document.getElementById("error").innerHTML = "手机号不能为空！";
		
		document.getElementById("button_inquiry").disabled = true;
		return false
	} else {
		document.getElementById("error").innerHTML = "手机号码格式不正确，请重新输入!";
		document.getElementById("button_inquiry").disabled = true;
		return false
	}
}