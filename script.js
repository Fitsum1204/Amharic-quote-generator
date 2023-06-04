//import {localQuotes} from './quotes.js';
const quoteContainer =document.getElementById('quote-container');
const quoteText =document.getElementById('quote');
const twitterBtn =document.getElementById('twitter');
const newQuoteBtn =document.getElementById('new-quote');
const loader =document.getElementById('loader');


//show loading
function loading(){
	loader.hidden = false;
	quoteContainer.hidden = true;
}

//hide loading

function complet(){
	quoteContainer.hidden = false;
	loader.hidden = true;	
}
function newQuote(){
	loading();
const quote = localQuotes[Math.floor((Math.random() * localQuotes.length)) ];	

if(quote.text.length > 50){
	quoteText.classList.add('long-quote');
}  else {
	quoteText.classList.remove('long-quote');
}
quoteText.textContent = quote.text;

complet();
}

//Tweet quote
function tweetQuote(){
	const twitterUrl =`https://twitter.com/intent/tweet?text= " ${quoteText.textContent} "`;
	window.open(twitterUrl , '_blank');
}

//Event Listeners
newQuoteBtn.addEventListener('click' ,newQuote);
twitterBtn.addEventListener('click' ,tweetQuote);

newQuote();
