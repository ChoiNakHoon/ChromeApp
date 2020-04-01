const COORDS = "coords" 

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
        
    }
}

function init() {
    loadCoords();
}

init();