const quotes=[
    "The only limit to our realization of tomorrow is our doubts of today. -Oscar wilde",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
    "The best way to predict the future is to invent it. -Alan Kay",
    "The best way to predict the future is to create it. - Peter Drucker",  
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "If we agree on same point, one of us is idiot. -Malick Arslan"
]
let quote=quotes[Math.floor(Math.random()*quotes.length)];
let quoteElement=document.getElementById("quotebox");
quoteElement.innerHTML=quote;

let  newquote=document.getElementById("newquote");
const twitter=document.getElementById("tweet");

newquote.addEventListener("click",function(){
    quoteElement.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];
})

twitter.addEventListener("click",function(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(twitterUrl, "_blank");
})

