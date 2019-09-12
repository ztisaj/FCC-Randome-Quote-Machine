var arrQuotes = [
    {quote: "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!",
    author: "Billy Connolly"},
    {quote: "People say nothing is impossible, but I do nothing every day.",
    author: "A.A.Milne"},
    {quote: "If I were two-faced, would I be wearing this one?",
    author: "Abraham Lincoln"},
    {quote: "The only mystery in life is why the kamikaze pilots wore helmets.",
    author: "Al McGuire"},
    {quote: "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical.",
    author: "Arthur C. Clarke"},
    {quote: "A day without laughter is a day wasted.",
    author: "Charlie Chaplin"}
]

var randomeNum = Math.floor(Math.random()*6);
document.getElementById('text').innerHTML = arrQuotes[randomeNum].quote;
document.getElementById('author').innerHTML = "- " + arrQuotes[randomeNum].author;

function randomeQuotes() {
    var randomeNum = Math.floor(Math.random()*6);
    document.getElementById('text').innerHTML = arrQuotes[randomeNum].quote;
    document.getElementById('author').innerHTML = "- " + arrQuotes[randomeNum].author;
}

function changeColor() {
    const newColor = document.getElementById('quote-box');
    const chooseColor1 = document.getElementById('col1');
    const chooseColor2 = document.getElementById('col2');
    const chooseColor3 = document.getElementById('col3');
    const chooseColor4 = document.getElementById('col4');
    chooseColor1.addEventListener('click', () => {
        newColor.style.backgroundColor = 'blueviolet'; 
});
    chooseColor2.addEventListener('click', () => {
        newColor.style.backgroundColor = 'aquamarine'; 
});
    chooseColor3.addEventListener('click', () => {
        newColor.style.backgroundColor = 'lightblue'; 
});
    chooseColor4.addEventListener('click', () => {
        newColor.style.backgroundColor = 'palevioletred'; 
});
}
