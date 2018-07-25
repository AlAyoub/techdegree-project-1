// FSJS - Random Quote Generator
function randomQuoteGenerator() {
  var randomNumber = Math.floor(Math.random() * 8) + 1;
  return randomNumber;
}


// Testing my random quote generator
alert(randomQuoteGenerator());

// Create the array of quote objects and name it quotes

var quotes = [
  {quote: "Everything you've ever wanted is on the other side of fear."},
  {quote: "Perhaps the most important principle for the good algorithm designer is to refuse to be content."},
  {quote: "Whatever the mind of man can conceive and believe, it can achieve."},
  {quote: "Strive not to be a success, but rather to be of value."},
  {quote: "You miss 100% of the shots you don't take."},
  {quote: "The mind is everything. What you think you become."},
  {quote: "Believe you can and you're halfway there."},
  {quote: "A person who never made a mistake never tried anything new."}

];

var author = [
  {author: "Geroge Addair"},
  {author: "Alfred V. Aho"},
  {author: "Napoleon Hill"},
  {author: "Albert Einstein"},
  {author: "Wayne Gretsky"},
  {author: "Buddha"},
  {author: "Theodore Roosevelt"},
  {author: "Albert Einstein"}


];

alert(quotes[0]);



// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {

}


// Create the printQuote funtion and name it printQuote
function printQuote() {

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
