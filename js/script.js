/*
Created by: Alan Ayoub
Full Stack Tech Degree Project 1
Random Quote Generator
*/

// generates a random number between 0 and 7
function randomQuoteGenerator() {
  var randomNumber = Math.floor(Math.random() * 8);
  return randomNumber;
}

// quotes array with objects

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

// This function calls our random generator
// and returns our random number as an integer
function getRandomQuote(array) {
  var Num = randomQuoteGenerator();
  var getRandomQuote = quotes[Num];
  return getRandomQuote;
}

// Create the printQuote funtion and name it printQuote
function printQuote() {

  var quote = getRandomQuote(); // stores the random integer in a new variable 'quote'
  var quoteString = "";         // create a new variable with an empty string

  // if/else conditions to print out the correct quoteString
  if (quote.citation === undefined && quote.year === undefined) {
    quoteString =  "<p class='quote'>" + quote.quote + "</p>";
    quoteString += "<p class='source'>" + quote.source + "</p>";
  } else if (quote.year === undefined) {
    quoteString =  "<p class='quote'>" + quote.quote + "</p>";
    quoteString += "<p class='source'>" + quote.source;
    quoteString += "<span class='citation'>" + quote.citation + "</span>"+ "</p>";
  } else {
    quoteString =  "<p class='quote'>" + quote.quote + "</p>";
    quoteString += "<p class='source'>" + quote.source;
    quoteString += "<span class='citation'>" + quote.citation + "</span>";
    quoteString += "<span class='year'>" + quote.year + "</span>"+ "</p>";
  }
    // Javascript method to display the HTML string
    document.getElementById('quote-box').innerHTML = quoteString;
}

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
