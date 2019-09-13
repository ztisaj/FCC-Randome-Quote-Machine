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
    author: "Charlie Chaplin"},
    {quote: "War is God’s way of teaching Americans geography.",
    author: "Ambrose Bierce"},
    {quote: "We never really grow up, we only learn how to act in public.",
    author: "Bryan White"},
    {quote: "As a child my family’s menu consisted of two choices: take it or leave it.",
    author: "Buddy Hackett"},
    {quote: "If you love something set it free, but don’t be surprised if it comes back with herpes.",
    author: "Chuck Palahniuk"},
    {quote: "When I was a boy I was told that anybody could become President. I’m beginning to believe it.",
    author: "Clarence Darrow"},
    {quote: "If you think you are too small to make a difference, try sleeping with a mosquito.",
    author: "Dalai Lama"},
    {quote: "Remember, today is the tomorrow you worried about yesterday.",
    author: "Dale Carnegie"},
    {quote: "Everyone has a purpose in life. Perhaps yours is watching television.",
    author: "David Letterman"},
    {quote: "Patriotism is your conviction that this country is superior to all others because you were born in it.",
    author: "George Bernard Shaw"}
]

var startNum = Math.floor(Math.random()*arrQuotes.length);
document.getElementById('text').innerHTML = arrQuotes[startNum].quote;
document.getElementById('author').innerHTML = "- " + arrQuotes[startNum].author;

function randomeQuotes() {
    var randomeNum = Math.floor(Math.random()*arrQuotes.length);
    document.getElementById('text').innerHTML = arrQuotes[randomeNum].quote;
    document.getElementById('author').innerHTML = "- " + arrQuotes[randomeNum].author;
}

function changeColor() {
    const newColor = document.getElementById('theBody');
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
