const weatherCheck = document.querySelector('.text');
let result;

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '51912d5ec3msh73f3140194ae2fcp1b6d19jsnc756b686ef93',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

async function fetchWeather(){

 try {
	const response = await fetch(url, options);
	result = await response.text();
    weatherCheck.innerHTML = result;
} catch (error) {
	console.error(error);
}
};
