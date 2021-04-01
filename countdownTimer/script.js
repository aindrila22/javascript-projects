const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secsEl = document.getElementById("seconds");

const puja = "10 October 2021";

function countdown() {
  const pujaDate = new Date(puja);
  const currentDate = new Date();
  const tseconds = (pujaDate - currentDate) / 1000;
  const days = Math.floor(tseconds / 3600 / 24);
  const hours = Math.floor(tseconds / 3600) % 24;
  const minutes = Math.floor(tseconds / 60) % 60;
  const seconds = Math.floor(tseconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(minutes);
  secsEl.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
