let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/lib/filter').filter;


assert.equal(filter('orange', ['orange']), '******');
assert.equal(filter('orange sadfsadf', ['orange']), '****** sadfsadf');
//assert.equal(filter('kekkek sadfkek kekorange', ['orange', 'kek']), '****** sadf*** *********');