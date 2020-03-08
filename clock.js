/* 
    시계 함수
    매초 마다 시계가 움직이는 기능
*/
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

const RUN_SECONDS = 1000;
function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const format_12_hours = (date.getHours() + 12) % 12  || 12 ;
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 13 ? `AM`:`PM`} ${format_12_hours< 10 ? `0${format_12_hours}` : format_12_hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, RUN_SECONDS);
}

init();