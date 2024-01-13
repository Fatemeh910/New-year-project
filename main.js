///چگونه مقدارزمان راتبدیل کنیم به میلی ثانیه
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute =  60 * 1000;

const counter = () =>{
const newYearDate = new Date("1 jan 2025").getTime();
const currentDate = new Date().getTime();

const diffrentTime = newYearDate - currentDate;
/// تبدیل تایم به روز ساعت دقیقه وثانیه وباتابع فلوراعشارانرا ازبین بردیم
const days = Math.floor(diffrentTime / oneDay);
const hours = Math.floor((diffrentTime % oneDay) / oneHour);
const minutes = Math.floor((diffrentTime % oneHour) / oneMinute);
const seconds = Math.floor((diffrentTime % oneMinute) / 1000);

const values = [days,hours,minutes,seconds];

const deadLineNumbers = document.querySelectorAll(".dead-line-number");

deadLineNumbers.forEach((item, index) => {
    item.innerHTML = formatNumber(values[index]);
});
//اینجا اگرمدت زمان کمترازصفربش یعنی سال تحویل بشه میادالمنت رو تمام مقادیروحذف میکنه ومینویسه هپی نیویر 
if(diffrentTime <= 0){
    const newYearBox = document.querySelector(".new-year-wrapper");
    newYearBox.innerHTML = "<h1>Happy new year🎉</h1>";
    clearInterval(interval);
}
};
///فانکشن کمکی برای صفرگذاشتن کنارعدد
const formatNumber = (Number)=>{
   if(Number <10) {
    return `0${Number}`;
   } else {
    return Number;
   }
   
};

const interval = setInterval(counter,1000); 