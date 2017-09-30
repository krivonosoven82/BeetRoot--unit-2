$(document).ready(function(){
	$('input').change(function() {
		if($(this).val())
	    	$(this).addClass('has_value');
	    else
	    	$(this).removeClass('has_value');
	});
});
