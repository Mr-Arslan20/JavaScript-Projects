const input=document.getElementById("input");
const searchbtn=document.getElementById("search");
const imagecontainer=document.getElementById("image-container");




searchbtn.addEventListener('click',async ()=>{
    const searchvalue=input.value;

    if(searchvalue=== ''){
        alert("enter the search item first");
    }
    else{
 const accesskey='cIFZYq_0v1Kr8obwTjxH7j_02f2KLDQoFN8tXwEHMAA';
const URL= `https://api.unsplash.com/search/photos?page=1&query=${searchvalue}&client_id=${accesskey}&per_page=12 `;

let data=await fetch (URL);
data = await data.json();

console.log(data,"data");

displayimage(data);
   }
})

function displayimage(data){
    imagecontainer.innerHTML='';
    data.results.forEach(element => {
    console.log(element.urls.regular);
    const Img=document.createElement('Img');
    Img.src=element.urls.regular;
   imagecontainer.appendChild(Img);
    });

}