

$(document).ready(function() {
		
	$("#res-menu").click(function() {
		
		$(".menu").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
		
	});
	
});;



$(function(){
	$(".open").click(function(){
		$(".modal").addClass("appear");
	});

	 $('.closebtn').click(function(){
   	 $('.modal').removeClass('appear');

  });

		
	});


