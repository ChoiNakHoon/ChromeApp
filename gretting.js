const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintName(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
    } else {
        paintName(currentUser);
    }
}

function init() {
    loadName();
}

init();