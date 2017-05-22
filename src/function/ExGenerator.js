/**
 * Js Generator (ES6标准)
 *
 * Created by shenyunlong on 2017/5/22.
 */

'use strict';

function* simpleGenerator(){
    yield "first";
    yield "second";
    yield "third";
    for (var i = 0; i < 3; i++) {
        yield i;
    }
}

var g = simpleGenerator();
console.log(g.next()); // prints "first"
console.log(g.next()); // prints "second"
console.log(g.next()); // prints "third"
console.log(g.next()); // prints 0
console.log(g.next()); // prints 1
console.log(g.next()); // prints 2
console.log(g.next()); // StopIteration is thrown

//一个产生斐波那契数列的函数
function* fib(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 1;
    while (n < max) {
        yield a;
        t = a + b;
        a = b;
        b = t;
        n ++;
    }
    return a;
}

// fib(5);

//1-不断地调用generator对象的next()方法
var f = fib(5);
console.log(">>>");
console.log(f.next()); // {value: 0, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 1, done: false}
console.log(f.next()); // {value: 2, done: false}
console.log(f.next()); // {value: 3, done: true}

//2-直接用for ... of循环迭代generator对象，这种方式不需要我们自己判断done
console.log(">>>");
for (var x of fib(5)) {
    console.log(x); // 依次输出0, 1, 1, 2, 3
}