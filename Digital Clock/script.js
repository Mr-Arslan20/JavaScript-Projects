function updateclock(){
const display=document.getElementById("time");
const now= new Date();
const hours=now.getHours();
const minutes=now.getMinutes();
const seconds=now.getSeconds();


const formattedhours=String(hours).padStart(2,'0');
const formattedmin=String(minutes).padStart(2,'0');
const formattedsec=String(seconds).padStart(2,'0');

display.textContent=`${formattedhours}: ${formattedmin} : ${formattedsec}`;
}

setInterval(updateclock,1000);
updateclock();