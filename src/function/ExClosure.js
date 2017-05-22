/**
 * Js 闭包
 *
 * Created by shenyunlong on 2017/5/22.
 */

'use strict';

//在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，
//当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    };
    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]);
console.log(">>> " + f());

//创建一个匿名函数并立刻执行
var ret = (function (x) {
    return x * x;
})(4);
console.log(">>> " + ret);