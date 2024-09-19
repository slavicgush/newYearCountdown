document.addEventListener("DOMContentLoaded", function () {
  
  const monthsElement = document.getElementById("months");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
 

  const currentYear = new Date().getFullYear();
  const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

  function updateCountdownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const mo = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const d = Math.floor((diff % (1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24)));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m =  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    monthsElement.innerHTML = mo < 10 ? "0" + mo : mo;
    daysElement.innerHTML = d < 10 ? "0" + d : d;
    hoursElement.innerHTML = h < 10 ? "0" + h : h;
    minutesElement.innerHTML = m < 10 ? "0" + m : m;
    secondsElement.innerHTML = s < 10 ? "0" + s : s;
    //console.log(diff);
    
  }
  setInterval(updateCountdownTime, 1000);
});
