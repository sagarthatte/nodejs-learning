var lang = require('./greetings.json');

var greet = function(name) {
    console.log(lang.en + ' ' + name);
}

module.exports = greet;