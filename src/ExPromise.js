/**
 * Js Promise
 *
 * Created by shenyunlong on 2017/5/12.
 */

'use strict';

function log(s) {
    console.log(s);
}

function test(resolve, reject) {
    var timeOut = Math.random() * 2;
    log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            log('call resolve()...');
            resolve('200 OK');
        }
        else {
            log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}

// var p1 = new Promise(test);
// var p2 = p1.then(function (result) {
//     console.log('成功：' + result);
// });
// var p3 = p2.catch(function (reason) {
//     console.log('失败：' + reason);
// });

new Promise(test).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});


// 同时执行p1和p2，并在它们都完成后执行then:
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 600, 'P2');
});
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});