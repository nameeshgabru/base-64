var base64 = require('base-64');
var utf8 = require('utf8');
 
var text = 'nameesh';
var bytes = utf8.encode(text);

console.log('\n')

var encoded = base64.encode(bytes);

console.log(encoded);

console.log('\n')

var bytes = base64.decode(encoded);

var text = utf8.decode(bytes);

console.log(text);