function check(){
		var PhoneNumber = /^1\d{10}$/;
		var a = document.getElementById("input_phone").value;
		if(PhoneNumber.test(a)){
			alert("该手机号未报名");
		}
		else if(a == ""){
			alert("手机号不能为空！");
			document.getElementById("button_inquiry").disabled=true;  
		}
		else{
			alert("手机号码格式不正确，请重新输入!");
			document.getElementById("button_inquiry").disabled=true;  
		}
		}
	function ban(){
		var PhoneNumbe = /^1\d{10}$/;
		var a = document.getElementById("input_phone").value;
		 if (PhoneNumbe.test(a)) {
		 	document.getElementById("button_inquiry").disabled=false;  
		 }
	}
