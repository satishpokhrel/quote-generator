var quote = document.querySelector('.quote');
var author = document.querySelector('#author');

var quoteList = [{
    quote: "What is there in a name? It is merely an empty basket, until you put something into it.",
    author: "Charles Babbage"
},
{
    quote: "I have no special talent. I am only passionately curious.",
    author: "Albert Einstein"
},
{
    quote: "L-vis bhai ke agey koi bol sakta hai kya bhai.",
    author: "Mahatma Gandhi"
},
{
    quote: "God may exist, but science can explain the universe without the need for a creator.",
    author: "Stephen Hawking"
},
{
    quote: "With great power comes great responsiblity.",
    author: "Batman"
},
{
    quote: "That's the beauty of life. It's hard and it's scary, and it's confusing. And it's beautiful.",
    author: "Tony Stark"
},
{
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi"
},
{
    quote: "Behind every great man is a woman rolling her eyes.",
    author: "Jim Carey"
},
{
    quote: "The man who says his wife can't take a joke, forgets that she took him.",
    author: "Oscar Wilde"
}

];

document.querySelector('.new-quote').addEventListener("click", function(){
    //generating random number
    var randomNumber = Math.floor(Math.random() * quoteList.length);
    document.querySelector('.quote').textContent = quoteList[randomNumber].quote;
    document.querySelector('#author').textContent = quoteList[randomNumber].author;
});

document.querySelector('.fa-volume-high').addEventListener("click", function(){
    var msg =  new SpeechSynthesisUtterance();
    msg.text = document.querySelector('.quote').textContent + "by" + document.querySelector('#author').textContent;
    window.speechSynthesis.speak(msg);
}); 

// eventlistner for copy button 
document.querySelector('.fa-copy').addEventListener('click', function(){
    var copyText = document.querySelector('.quote').innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard");
});
