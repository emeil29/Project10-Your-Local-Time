const container = document.querySelector('.container');
const time = document.querySelector('.time');


const localTime = setInterval(myTimer, 1000);

function myTimer() {
  const dateTime = new Date();
  time.innerHTML = dateTime.toLocaleTimeString();
}
