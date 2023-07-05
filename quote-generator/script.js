const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// get quotes from API
async function getQuotes() {
  const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    // handle error
    alert(error);
  }
}

// show new quote
function newQuote(){
  let quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quote.author === 'Anonymous' ? authorText.textContent = 'Unknown': authorText.textContent = quote.author;
  // texts bigger than 50 characters get a smaller font-sinze
  quote.text.length > 50 ? quoteText.classList.add("long-quote") : quoteText.classList.remove("long-quote");
  quoteText.textContent = quote.text;
}

// tweet a quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();