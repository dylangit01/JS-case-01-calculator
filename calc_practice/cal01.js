//后面会持续用到，所以从第6行提到函数外面去, 而且后面不能直接跟.value，不然后面空值的时候会出错
var vv1 = document.getElementById('v1');
var vv2 = document.getElementById('v2');
var calc = function () {
    var calcType = document.getElementById('type').value;
    var eleResult = document.getElementById('result'); //为什么直接跟value就不行？
    var result = null; //这里可不可以不写result，直接用eleResult = addFun（）和其它函数
    // result = addFun(vv1,vv2)
    // eleResult.value = result
    var aValue = parseFloat(vv1.value);
    var bValue = parseFloat(vv2.value);
    if (calcType === '+') {
        result = addFun(aValue, bValue);
    }
    else if (calcType === '-') {
        result = subFun(aValue, bValue);
    }
    else if (calcType === '*') {
        result = mulFun(aValue, bValue);
    }
    else if (calcType === '/') {
        result = divFun(aValue, bValue);
    }
    else if (calcType === '%') {
        result = modFun(aValue, bValue);
    }
    else if (calcType === 'bmi') {
        result = bmiFun(aValue, bValue);
    }
    eleResult.value = result; //如何让result只显示小数点2位？
};
//如何控制当输入为空的时候，diable计算的button
var inputCheck = function (inputvalue) {
    if (vv1.value === '' || vv2.value === '') {
        btnStatus(false);
    }
    else {
        btnStatus(true);
    }
};
var btnStatus = function (enable) {
    var btn = document.getElementById('calcBtn');
    if (enable) {
        btn.removeAttribute('disabled');
    }
    else {
        btn.setAttribute('disabled', '');
    }
};
// let enableBtn = () => {
//     let btn = document.getElementById('calcBtn')
//     btn.setAttribute('enabled', '')
// }
var addFun = function (a, b) {
    var sum = a + b;
    return sum;
};
var subFun = function (a, b) {
    var sum = a - b;
    return sum;
};
var mulFun = function (a, b) {
    var sum = a * b;
    return sum;
};
var divFun = function (a, b) {
    var sum = a / b;
    return sum;
};
var modFun = function (a, b) {
    var sum = a % b;
    return sum;
};
var bmiFun = function (kg, m) {
    var bmi = kg / Math.pow(m, 2);
    return Math.round(bmi); // 如何显示小数点后2位
};
//////////////////////////////////////////////////////
var loveMatch = function () {
    var eleLoveResult = document.getElementById('loveresult');
    var result = lovePercentage();
    eleLoveResult.value = String(result);
};
var lovePercentage = function () {
    var n = Math.random();
    var m = Math.floor(n * 100 + 1);
    return m; //how to add % sign?
};
////////////////////////
var eleName01 = document.getElementById('name01');
var eleName02 = document.getElementById('name02');
var nameCheck = function (inputName) {
    if (eleName01.value === '' || eleName02.value === '') {
        loveBtnStatus(false);
    }
    else {
        loveBtnStatus(true);
    }
};
var loveBtnStatus = function (enable) {
    var btn = document.getElementById('lovebtn');
    if (enable) {
        btn.removeAttribute('disabled');
    }
    else {
        btn.setAttribute('disabled', '');
    }
};
/////////////////////////////////////////////////////////
function bmiCalculator(weight, height) {
    var interpretation = weight / Math.pow(height, 2);
    return interpretation;
}
// yourScoure()
function yourScoure() {
    var bmi = Math.floor(bmiCalculator(60, 2));
    if (bmi < 18.5) {
        alert('Your BMI is ' + bmi + ' ,so your are underweight.');
    }
    if (bmi >= 18.5 && bmi <= 24.9) {
        alert('Your BMI is ' + bmi + ' ,so you have a normal weight.');
    }
    if (bmi > 24.9) {
        alert('Your BMI is ' + bmi + ' ,so you are overweight.');
    }
}
/////////////////////////////////////////////////
var output = [];
var i = 1;
var fizzBuzz = function () {
    var n = i++;
    output.push(n);
    if (n % 3 === 0) {
        output.pop();
        output.push('fizz');
    }
    if (n % 5 === 0) {
        output.pop();
        output.push('buzz');
        /*这里不能用else if，因为149行的if是指满足条件就跳到结尾了，只有在不满足先前的条件下，才会跳到else if条件，
        但是全是if就一定要检查每一条条件的选择， 但是也可以用下面fizzBuzz2()的写法*/
    }
    if (n % 3 === 0 && n % 5 === 0) {
        output.pop();
        output.push('fizzBuzz');
    }
    console.log(output);
};
var fizzBuzz2 = function () {
    var n = i++;
    if (n % 3 === 0 && n % 5 === 0) {
        output.push('FizzBuzz');
    }
    else if (n % 3 === 0) {
        output.push('Fizz');
    }
    else if (n % 5 === 0) {
        output.push('Buzz');
    }
    else {
        output.push(n);
    }
    console.log(output);
};
///////////////////////////////////////////
// let b = 100
//
// while (b > 0) {
//     let aa = b - 1
//     if(b > 1){
//         console.log(b + ' bottles for beer on the wall,' + b + ' bottles of beer. Take 1 down, pass it around, ' + aa + ' bottles of beer on the wall.')
//     } if (b === 1) {
//         console.log(b + ' bottle for beer on the wall, ' + b + ' bottle of beer. Take 1 down, pass it around, no more bottle of beer on the wall.')
//     }
//     b--
// }
// for(let i = 100; i>0; i--){
//     let l = i-1
//     if (i > 1){
//         console.log(i + ' bottles for beer on the wall,' + i + ' bottles of beer. Take 1 down, pass it around, ' + l + ' bottles of beer on the wall.')
//     } else if (i === 1){
//         console.log(i + ' bottle for beer on the wall, ' + i + ' bottle of beer. Take 1 down, pass it around, no more bottle of beer on the wall.')
//     }
// }
////////////////////////////////////
function fibonacciGenerator(n) {
    var fiarray = [];
    for (var i_1 = 0; i_1 < n; i_1++) {
        if (i_1 < 2) {
            fiarray.push(i_1);
        }
        else {
            fiarray.push(fiarray[fiarray.length - 1] + fiarray[fiarray.length - 2]);
        }
    }
    //Return an array of fibonacci numbers.
    console.log(fiarray);
}
