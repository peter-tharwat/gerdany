$('.hide-password').on('click',function(){
	if($('#'+$(this).data('for')).attr('type')=="password"){
		$('#'+$(this).data('for')).attr('type','text');
		$(this).removeClass('fa-eye');
		$(this).addClass('fa-eye-slash');
	}
	else{
		$('#'+$(this).data('for')).attr('type','password');
		$(this).removeClass('fa-eye-slash');
		$(this).addClass('fa-eye');
	}
});