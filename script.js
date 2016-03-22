/* To add JS for BorrowOurBaby */
$('#password-form form').on('submit', function(event) {
	event.preventDefault();
	var userPassword=$("#password").val()
	if(userPassword==="Rafe"){
		$("#content").toggleClass("hidden")
		$("#password-form").toggleClass("hidden")
	}
	else{
		alert("We don't yet have an account for your baby!")
	}
});

