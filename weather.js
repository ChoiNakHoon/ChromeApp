const weather = document.querySelector(".js-weather");
const API_KEY = "31df3784d34b2dc20fbb6cc5f4dbc74c";
const COORDS = "coords";

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric&lang=zh_cn`
    ).then(function(response){
        return response.json()
    }).then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `지금 온도는 ${Math.round(temp)}도 현재 지역은 ${place}`;
    });
}
function saveCoords(geoLoactionObj){
    localStorage.setItem(COORDS, JSON.stringify(geoLoactionObj)); 
    
}
function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoLoactionObj = {
        latitude,
        longitude
    };
    saveCoords(geoLoactionObj);
    getWeather(latitude, longitude);
}

function handelGeoFail() {
    console.log("정보 접근에 실패 하였습니다.");
}
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handelGeoFail)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude)
        
    }
}

function init() {
    loadCoords();
}

init();