let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/lib/main').filter;


assert.equal(filter('orange', ['orange']), '******');
assert.equal(filter('orange sadfsadf', ['orange']), '****** sadfsadf');
