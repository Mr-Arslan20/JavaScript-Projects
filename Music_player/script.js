
    let range=document.querySelector("#range");
    let ctrlicon=document.querySelector("#div2 i");
    
    let prev=document.querySelector("#div1");
    let next=document.querySelector("#div3");
    let audio=document.querySelector("#song");

    audio.onloadedmetadata=function(){
       
        range.max =audio.duration;
      
        range.value=audio.currentTime;
    }
    function playPause(){
       if(ctrlicon.classList.contains("fa-pause")){
        audio.pause();
           ctrlicon.classList.remove("fa-pause");
           ctrlicon.classList.add("fa-play");
          
       }
       else{
        audio.play();
     ctrlicon.classList.remove("fa-play");
     ctrlicon.classList.add("fa-pause");
       }
    }
    if(audio.play){
        setInterval(() => {
            if(!audio.paused){
                range.value= Math.floor(audio.currentTime);
            }
            
        }, 500);
    }
         range.oninput = function () { 
        audio.currentTime = range.value;
         };
    
    range.onchange = function () { 
        if (!audio.paused) {
            audio.play();
        }
    };
    
   