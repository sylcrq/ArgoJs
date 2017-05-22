/**
 * Created by shenyunlong on 2017/5/19.
 */

'use strict';

//1-high order function
function add(x, y, f) {
    return f(x) + f(y);
}

console.log(">>>" + add(-5, 6, Math.abs));

//2-map
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function pow(x) {
    return x * x;
}
var ret1 = arr.map(pow);

//3-reduce
var ret2 = arr.reduce(function (x, y) {
    return x + y;
});

//4-filter
var ret3 = arr.filter(function (x) {
    return x % 2 !== 0;
});
//利用filter巧妙地去除Array的重复元素
var arr2 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var ret4 = arr2.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});

//5-sort
var arr3 = [10, 20, 1, 2];
var arr4 = [10, 20, 1, 2];
//sort()方法会直接对Array进行修改
arr3.sort();
arr4.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

console.log("f(x)=x*x >>> " + ret1);
console.log("数组求和 >>> " + ret2);
console.log("删掉偶数，只保留奇数 >>> " + ret3);
console.log("巧妙地去除Array的重复元素 >>> " + ret4);
console.log("Array的sort()方法默认把所有元素先转换为String再排序 >>> " + arr3);
console.log("按数字大小排序 >>> " + arr4);