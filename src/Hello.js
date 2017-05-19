/**
 * JavaScript Hello World
 *
 * Created by shenyunlong on 2017/4/26.
 */

'use strict';

console.log('Hello World');

var s = 'Hello ';

function greet(name) {
    console.log(s + name + ' !');
}

function bye(name) {
    console.log('Bye ' + name + ' ~');
}

// module.exports = greet;

module.exports = {
    greet: greet,
    bye: bye
};