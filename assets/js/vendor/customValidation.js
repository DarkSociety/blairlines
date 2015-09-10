$(document).ready(function()){

	//Custom Validation
	
	$('.form-signin').validate({
		rules: {
					email: {	
						required: true,
						email: true
					}
					encryptedPassword: {
						minlength: 8,
						equalTo: "#password"
					}
					success: function(elemetn) {
						element.text('OK!').addClass('valid')
					}
				});
		});