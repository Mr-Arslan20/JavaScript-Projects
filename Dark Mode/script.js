let modeBtn = document.getElementById("changemode");

if(localStorage.getItem("mode")==="dark"){
    document.body.classList.add("dark-mode");
    modeBtn.innerText="light mode";
}
else{
    modeBtn.innerText="dark mode";
}
modeBtn.addEventListener("click",function(){
    if(document.body.classList.contains("dark-mode")){
        document.body.classList.remove("dark-mode");
        localStorage.setItem("mode","light");
        modeBtn.innerText="dark mode";
    }
    else{
        document.body.classList.add("dark-mode");
        localStorage.setItem("mode","dark");
        modeBtn.innerText="light mode";
    }
})
