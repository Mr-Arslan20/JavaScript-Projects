document.addEventListener("DOMContentLoaded",function(){
    let display=document.getElementById("input");
    let buttons= document.querySelectorAll(".btn");
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            let value=this.getAttribute("data-value");

        if(value==="AC")
        {
            display.value="";
        }
        else if(value==="="){
            try{
                display.value=eval(display.value);
            }
            catch{
                display.value="error";
            }
        }
        else{
            display.value+=value;
        }

        })
        
    });
})


