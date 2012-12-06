/*
 * @author Brian Tomlinson <darthlukan@gmail.com>
 * @description A simple set of functions used to display
 * quotes at random from the book "The Art Of War" by
 * Sun Tzu.
 */


// Using XHR as it's simpler to implement than AJAX.
var xhr = new XMLHttpRequest();

// Grab the file containing our text
xhr.open('GET', 'quotes.txt', false);

// null here means we're using synchronous, not asynchronous calls.
xhr.send(null);

// Quotes are separated by double newlines in our text document.
var quotes = xhr.responseText.split('\n\n');

/*
 * @returns randint, a random integer
 */
function randomize() {
    
    var randint = Math.floor(Math.random() * quotes.length);
    
    return randint;
}

/*
 * Set the title and randomly choose a quote for display.
 *
 */
function showQuotes() {
    
    $('#quotes').append("<h3>Quotes from 'The Art Of War':</h3><br />");
    
    $('#quotes').append('<p>' + quotes[randomize()] + '</p>');
}

// Execute
$('document').ready(
                    showQuotes()
                    );