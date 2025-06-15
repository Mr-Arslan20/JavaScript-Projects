const apikey="21caebd43f45455540053eb9b2d529e0";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".head input");
const searchbtn=document.querySelector(".head button");

async function checkweather(city){ 
   
    
    const response= await fetch(apiurl  +city+`&appid=${apikey}`) 
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temprature').innerHTML=(data.main.temp + "°C");
    document.querySelector('.windval').innerHTML=(data.wind.speed + "km/s");
    document.querySelector('.humidityval').innerHTML=(data.main.humidity + "%");

    
}
searchbtn.addEventListener("click",()=>{
    const city = searchbox.value;
    checkweather(city);// 
})

checkweather(city);  