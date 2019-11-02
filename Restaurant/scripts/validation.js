let clearErrors = function(){
	for ( let i = 0; i < document.forms["contact"].elements.length; i++ ){
		if ( document.forms["contact"].elements[i].parentElement.className.indexOf("has-") != -1){
			document.forms["contact"].elements[i].parentElement.className = "form-group";
		}
	}
}

let resetForm = function(){
		clearErrors();
		document.forms["contact"]["name"].value = "";
		document.forms["contact"]["email"].value = "";
		document.forms["contact"]["phone"].value = "";
		document.forms["contact"]["reason"].selectedIndex = "0";
		document.forms["contact"]["info"].value = "";
		let attendance = document.getElementsByName("attendance");
		for( let i = 0; i < attendance.length; i++){
			attendance[i].checked = false;
		}
		let days = document.getElementsByName("days");
		for( let i = 0; i < days.length; i++){
			days[i].checked = false;
		}
}

let validateItems = function(){
	clearErrors();
	let name = document.forms["contact"]["name"].value,
		email = document.forms["contact"]["email"].value,
		phone = document.forms["contact"]["phone"].value,
		yes = document.getElementById("yes"),
		no = document.getElementById("no");
		
	if(name === "" || !isNaN(name)){
		alert("Please provide your name.");
		document.forms["contact"]["name"].parentElement.className = "form-group has-error";
		return false;
	}
	
	if(email === ""){
		alert("Please provide and email address.");
		document.forms["contact"]["email"].parentElement.className = "form-group has-error";
		return false;
	}
	
	if(phone === ""){
		alert("Please provide a phone number.");
		document.forms["contact"]["email"].parentElement.className = "form-group has-error";
		return false;
	}
	
	if( yes.checked === false && no.checked === false ){
		alert("Please select yes or no.");
		yes.parentElement.parentElement.className = "form-group has-error";
		return false;
	}
	
	
	alert("Form is valid");
	return false;
}