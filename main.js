const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute =  60 * 1000;

const counter = () =>{
const newYearDate = new Date("1 jan 2025").getTime();
const currentDate = new Date().getTime();

const diffrentTime = newYearDate - currentDate;

const days = Math.floor(diffrentTime / oneDay);
const hours = Math.floor((diffrentTime % oneDay) / oneHour);
const minutes = Math.floor((diffrentTime % oneHour) / oneMinute);
const seconds = Math.floor((diffrentTime % oneMinute) / 1000);

const values = [days,hours,minutes,seconds];

const deadLineNumbers = document.querySelectorAll(".dead-line-number");

deadLineNumbers.forEach((item, index) => {
    item.innerHTML = values[index];
});
};

const interval = setInterval(counter,1000); 