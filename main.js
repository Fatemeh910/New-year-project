const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute =  60 * 1000;

const counter = () =>{
const newYearDate = new Date("1 jan 2024").getTime();
const currentDate = new Date().getTime();

const diffrentTime = newYearDate - currentDate;

const days = Math.floor(diffrentTime / oneDay);
const hours = Math.floor((diffrentTime % oneDay) / oneHour);

};

const interval = setInterval(counter,1000); 