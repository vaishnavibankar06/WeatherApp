async function fetchWeatherData(cityName){
	let url=https://api.openweathermap.org/data/2.5/weather?q=pune&appid=012e3cb1b355912b011a73b9854519ec;
	const response=await fetch(url)
	const data=await response.json();
	let city=document.getElementById("city");
    city.innerHTML=data.name;
	let windSpeed=document.getElementById("Wind_speed");
	windSpeed.innerHTML=data.wind.speed + "km/hr";
	let humidity=document.getElementById("Humidity");
	humidity.innerHTML=data.main.humidity+" g/kg";
	let temp=document.getElementById("temp");
	temp.innerHTML=Math.round((data.main.temp)-273.15)+"C";
	console.log(data);
	
}
function fetchCity(){
	let cityName=document.getElementById("cityname");
	if (cityName.value==="") {
		alert("Enter a city name");
	}
	else{
		fetchWeatherData(cityName.value);
	    cityName.value="";
	}
}