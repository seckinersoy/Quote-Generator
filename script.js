const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden =true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden=true;
}

// Show New Quote
function newQuote() {
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
    complete();
}


// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        // Catch Error Here
    }

}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes ();