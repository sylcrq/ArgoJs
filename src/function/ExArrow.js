/**
 * Js Arrow Function (ES6标准)
 *
 * Created by shenyunlong on 2017/5/22.
 */

'use strict';

var f1 = x => x * x

//返回一个对象
var f2 = x => ({foo : x})

console.log(">>> " + f1(3));
console.log(">>> " + f2(4));
