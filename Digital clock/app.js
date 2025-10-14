// let hour = document.getElementById("hour");
// let minute = document.getElementById("min");
// let seconds = document.getElementById("secs");
// let todayDate = document.getElementById("date")
// const date = new Date();

// hour.textContent = date.getHours();
// minute.textContent = date.getMinutes();
// seconds.textContent = date.getSeconds();

// todayDate.textContent = new Date().toLocaleDateString();

const date = document.getElementById('date');
date.textContent = new Date().toLocaleDateString();


const updateClock = () => {
    const clock = document.getElementById("clock")
    const time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let seconds = time.getSeconds();

    seconds = seconds < 10 ? '0' + seconds : seconds; 
    minute = minute < 10 ? '0' + minute : minute; 
    hour = hour < 10 ? '0' + hour : hour; 

    clock.textContent = `${hour}:${minute}:${seconds}`;

} 
setInterval(updateClock, 1000);
updateClock();

// const tick = () => {
//     const sound = document.getElementById("second");
//     sound.currentTime = 0;
//     sound.play();
// }
// setInterval(tick, 1000);
// tick();

const sound = document.getElementById("second");
const control = document.getElementById("toggleButton");

let ticking = false;
let interval = null;

const tick = () => {
//  sound.currentTime = 0;
 sound.play();
};

toggleButton.addEventListener("click", () => {
    if(!ticking){
        ticking = true;
        control.textContent = "Disable sound";
        interval = setInterval(tick, 1000);
        tick();
    } else {
        ticking = false;
        control.textContent = "Enable sound";
        clearInterval(interval);
    }
})