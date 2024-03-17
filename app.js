var greet = require('./modules/greet');

greet.greet();

// JS Object Literal to create Object on the fly.
var person = {
    firstname: 'Sagar',
    lastname: 'Thatte',
    greet: function() {
        console.log('Hello, ' + this.firstname + ' ' + this.lastname);
    }
};

