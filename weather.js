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
	 				var widget = show(data); 

	 				$("#show").html(widget);
	 				$("#city").val('');
	 		}

	 	});

	 	}

});
});

function show(data){
	return "<h3 style='font-size: 30px; font-weight: bold;' class='text-center'>Current Weather details for "+ data.name +"," + data.sys.country +"</h3>"+
	"<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" + "<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> " +
			"<h3 'padding-left:40px;'><strong>Description</strong>: "+ data.weather[0].description +"</h3>"+
			"<h3 'padding-left:40px;'><strong>Temperature</strong>: "+ data.main.temp +"&deg;C</h3>"+
			"<h3 'padding-left:40px;'><strong>Pressure</strong>: "+ data.main.pressure +" hPa</h3>"+
			"<h3 'padding-left:40px;'><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>"+
			"<h3 'padding-left:40px;'><strong>Min. Temperature</strong>: "+ data.main.temp_min +"&deg;C</h3>"+
			"<h3 'padding-left:40px;'><strong>Max. Temparature</strong>: "+ data.main.temp_max +"&deg;C</h3>"+
			"<h3 'padding-left:40px;'><strong>Wind Speed</strong>: "+ data.wind.speed +" m/s</h3>"+
			"<h3 'padding-left:40px;'><strong>Wind Direction</strong>: "+ data.wind.deg +"&deg;</h3>";
}