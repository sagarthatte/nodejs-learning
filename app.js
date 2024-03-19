var greet = require('./greet');

var util = require('util');

greet.english("Madam");
greet.spanish("Senorita");

// JS Object Literal to create Object on the fly.
// var person = {
//     firstname: 'Sagar',
//     lastname: 'Thatte',
//     greet: function() {
//         console.log('Hello, ' + this.firstname + ' ' + this.lastname);
//     }
// };

var myName = 'Sagar';
var greeting = util.format('Hello, %s', myName);
util.log(greeting);

var Emitter = require('./emitter');

emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Greet1');
});

emtr.on('greet', function() {
    console.log('Greet2 !!');
});

console.log('test \n');

emtr.emit('greet');