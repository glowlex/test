let assert = require('assert');
let hello = require('./public/main').hello;
let filter = require('./public/main').filter;


assert.equal(filter('orange'), '******');
assert.equal(filter('orange sadfsadf'), '****** sadfsadf');

global.window = {
rules: null
}