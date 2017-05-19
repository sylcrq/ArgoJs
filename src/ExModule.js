/**
 * Js Module Example
 *
 * Created by shenyunlong on 2017/5/19.
 */

'use strict';

//其实变量greet就是在hello.js中我们用module.exports = greet;输出的greet函数
const hello = require('./Hello');

var s = 'World ';

hello.greet('Syl');
hello.bye('Syl');
