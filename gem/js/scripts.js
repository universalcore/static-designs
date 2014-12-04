$(document).ready(function(){

	$("#header a.menu").on("click", function(){
		$('#header a.open').show();
		$(this).hide();
	  	$("#banner, #content, #footer, #base").animate({"left":"-85%"});
	    $("#header .drop").animate({"right":"0"});
	});

	$("#header a.open").on("click", function(){
		$('#header a.menu').show();
		$(this).hide();
	  	$("#banner, #content, #footer, #base").animate({"left":"0"});
	    $("#header .drop").animate({"right":"-85%"});
	});

//run menu animation, then go to page
/*
	$("#header .drop ul a").click(function(event){
		var url = $(this).attr('href');
	    event.preventDefault();
	    $("#banner, #content, #footer, #base").animate({"left":"-200px"});
	    $("#header .drop").animate({"right":"0"}, function(){
	    	window.location.href = url;
	    });
	});
*/

});