$(document).ready(function(){

$('#submitweather').click(function(){
	 var city = $("#city").val();
	 	if(city != ''){
	 		$.ajax({
	 			url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" +
	 			"&APPID=c53c65e7697a7c6b21c3204063aef169",
	 			type: "GET",
	 			dataType: "jsonp",
	 			success: function(data){
	 				console.log(data);
	 			
	 		}

	 	});

	 	}else{
	 		$("#error").html('Field cannot be empty');
	 	}

});
});