// const quoteContainer = document.getElementById('quote-container')
// const quoteText = document.getElementById('quote')
// const authorText = document.getElementById('author')
// const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// Get Quote From API
async function getQuote() {
    const proxyUrl = 'http://localhost:3001/api/proxy'
    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();
        console.log(data);
        // authorText.innerText = data.quoteAuthor;
        // quoteText.innerText = data.quoteText;
    } catch (error) {
        console.log('whoops, no quote', error);
    }
    // getQuote();
}

// On Load
getQuote();