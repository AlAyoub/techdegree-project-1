// FSJS - Random Quote Generator
function randomQuoteGenerator() {
  var randomNumber = Math.floor(Math.random() * 8);
  return randomNumber;
}


// Testing my random quote generator
// alert(randomQuoteGenerator());

// Create the array of quote objects and name it quotes

var quotes = [
  {
    quote:  "Everything you've ever wanted is on the other side of fear.",
    source: "Geroge Addair",
    citation: "",
    year: ""
  },
  {
    quote:  "Perhaps the most important principle for the good algorithm designer is to refuse to be content.",
    source: "Alfred V. Aho",
    citation: "",
    year: ""
  },
  {
    quote:  "Whatever the mind of man can conceive and believe, it can achieve.",
    source: "Napoleon Hill",
    citation: "",
    year: ""
  },
  {
    quote:  "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: "",
    year: ""
  },
  {
    quote:  "You miss 100% of the shots you don't take.",
    source: "Wayne Gretsky",
    citation: "",
    year: ""
  },
  {
    quote:  "The mind is everything. What you think you become.",
    source: "Buddha",
    citation: "",
    year: ""
  },
  {
    quote:  "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
    citation: "",
    year: ""
  },
  {
    quote:  "A person who never made a mistake never tried anything new.",
    source: "Albert Einstein",
    citation: "",
    year: ""
  },

];


// testing my array
console.log(quotes[0]);
console.log(quotes[5]);
console.log(quotes[7]);


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {

}


// Create the printQuote funtion and name it printQuote
function printQuote() {

}


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
