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
    source: "Geroge Addair"
  },
  {
    quote:  "The mind is everything. What you think you become.",
    source: "Buddha"
  },
  {
    quote:  "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote:  "A person who never made a mistake never tried anything new.",
    source: "Albert Einstein"
  },
  {
    quote:  "Perhaps the most important principle for the good algorithm designer is to refuse to be content.",
    source: "Alfred V. Aho",
    citation: "The Design and Analysis of Computer Algorithms",
    year: "1974"
  },
  {
    quote:  "Whatever the mind of man can conceive and believe, it can achieve.",
    source: "Napoleon Hill",
    citation: "Think and Grow Rich",
    year: "1937"
  },
  {
    quote:  "Strive not to be a success, but rather to be of value.",
    source: "Albert Einstein",
    citation: "LIFE Magazine",
    year: "1952"
  },
  {
    quote:  "You miss 100% of the shots you don't take.",
    source: "Wayne Gretsky",
    citation: "edition of the Hockey News",
    year: "1983"
  }

];

// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote(array) {
  var Num = randomQuoteGenerator();
  var getRandomQuote = quotes[Num];
  return getRandomQuote;
}

// Create the printQuote funtion and name it printQuote
function printQuote() {
  // Calls random quote and stores it in a variable
  var quote = getRandomQuote();
  // Constructs a string containing different properties using html
  console.log(quote);

  //console.log(quote);
  // if/else to handle missing citation or year

}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
