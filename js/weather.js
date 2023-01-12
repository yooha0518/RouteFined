const API_KEY ="a6b36dba5c0c0cd96b7350129d590889";
//openweather api 사용
function onGeoOk(){
    const lat = 33.590198;
    const log = 130.446849;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=33.590198&lon=130.446849&appid=a6b36dba5c0c0cd96b7350129d590889&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        weather.innerText = `Fukuoka Current Weather is ${data.weather[0].main} `;
        temp.innerText = `🌡${data.main.temp}`;
    });
}
onGeoOk();

function airAqi(){
    const airPollutionUrl = `https://api.openweathermap.org/data/2.5/air_pollution?lat=33.590198&lon=130.446849&appid=a6b36dba5c0c0cd96b7350129d590889`;
    fetch(airPollutionUrl)
    .then(response => response.json())
    .then(data => {
        const airPollutionAqi = document.querySelector(".aqi");
        airPollutionAqi.innerText =`${data.list[0].main.aqi}`;
    })
    
}
airAqi();
