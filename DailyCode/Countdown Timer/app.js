let startTimer = 10;
let time = startTimer * 60;
const timevalue = document.querySelector('.time');
setInterval(updateTime, 1000);
function updateTime() {
    let minute = Math.floor(time / 60);
    let second = time % 60;
    second = second < 10 ? '0' + second : second;
    if (minute >= 0)
        timevalue.textContent = `${minute}:${second}`;
    time--;
}