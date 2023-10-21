let userName = prompt("Lütfen isminizi Giriniz!", "İsim");

let myNameDOM = document.getElementById("myName");
let myClockDOM = document.getElementById("myClock");

myNameDOM.innerHTML = userName;

function showTime() {
    var currentDate = new Date();
    const daysOfWeek = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    myClockDOM.textContent = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')} ${daysOfWeek[currentDate.getDay()]}`;
    setTimeout(showTime, 1000);
}
showTime();