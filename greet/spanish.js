var lang = require('./greetings.json');

var greet = function(nombre) {
    console.log(lang.es + " " + nombre + " !!" );
}

module.exports = greet;