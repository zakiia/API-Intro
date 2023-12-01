const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote => {
    const quoteElement = document.getElementById('qoute');
    quoteElement.innerText = quote.quote;
}