const counter = () =>{
const newYearDate = new Date("1 jan 2024").getTime();
const currentDate = new Date().getTime();

const diffrentTime = newYearDate - currentDate;
};

const interval = setInterval(counter,1000); 