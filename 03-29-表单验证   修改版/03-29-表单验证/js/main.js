//function check(){
//		var PhoneNumber = /^1\d{10}$/;//呵!正则表达式
//		var a = document.getElementById("input_phone").value;
//		if(PhoneNumber.test(a)){
//			document.write("该手机号未报名");
//		}
//		else if(a == ""){
//			document.write("手机号不能为空！");
//			document.getElementById("button_inquiry").disabled=true;  
//		}
//		else{
//			document.write("手机号码格式不正确，请重新输入!");
//			document.getElementById("button_inquiry").disabled=true;  
//		}
//		}
function check() {
				var PhoneNumber = /^1\d{10}$/; //呵!正则表达式
				var a = document.getElementById("input_phone").value;
				if(PhoneNumber.test(a)) {
					document.getElementById("error").innerHTML = "该手机号未报名";
					document.getElementById("button_inquiry").style.background = "#af1600"
					document.getElementById("button_inquiry").disabled=false; 
				} else if(a == "") {
					document.getElementById("error").innerHTML = "手机号不能为空！";
					document.getElementById("button_inquiry").style.background = "rosybrown"
					document.getElementById("button_inquiry").disabled=true;  
				} else {
					document.getElementById("error").innerHTML = "手机号码格式不正确，请重新输入!";
					document.getElementById("button_inquiry").style.background = "rosybrown"
					document.getElementById("button_inquiry").disabled=true;  
				}
			}
//	function ban(){
//		var PhoneNumbe = /^1\d{10}$/;//呵!正则表达式
//		var a = document.getElementById("input_phone").value;
//		 if (PhoneNumbe.test(a)) {
//		 	document.getElementById("button_inquiry").disabled=false;  
//		 }
//	}
