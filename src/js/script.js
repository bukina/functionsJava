
"use strict";

/*  task1

let min = (a, b) => {
    if (a < b) {
        return -1
    }
    if (a > b) {
        return 1
    }
    if (a == b) {
        return 0
    }
}

document.write(min(2, 8)); */


/*  task2

function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1;

}

document.write(factorial(10)); */


/* task3


function get3digit(number1, number2, number3) {
    return (number1 + number2 + number3);

}

document.write(get3digit('1', '2', '4'));  */


/* task4

function square(a, b) {
   if (b == '') {
       return a * a
   }
   if (a == '') {
       return b * b
   }
   return a * b


}

document.write(square(2, 5)); */


/* task5


let n = parseInt(prompt("Введите натуральноечисло",));
let sum = n - 1;
let temp = n;

for (let i = 2; n > 1;) {
    if (!(n % i)) {
        sum -= i;
        n = n / i;
    } else i++;
}

if (!sum)
    alert("Число: " + temp + " является совершенным");
else
    alert("Число: " + temp + " не является совершенным"); */


/* task 7

function time(a, b, c) {
    if (a == "") {
        return '00' + ':' + b + ':' + c;
    }
    if (b == "") {
        return a + ':' + '00' + ':' + c;
    }
    if (c == "") {
        return a + ':' + b + ':' + '00';
    }

    return a + ':' + b + ':' + c;



}

document.write(time(12, "", 30)); */


/*  task 8

function getseconds(_hour, _min, _sec) {
    return _hour * 3600 + _min * 60 + _sec

}

document.write(getseconds(1, 20, 20) + ' ' + 'seconds'); */


/* task 9

function getfulltime(_number) {

    let a = (_number - (_number % 3600)) / 3600
    let b = (_number % 3600 - _number % 60) / 60
    let c = _number % 60
    return a + ':' + b + ':' + c

}

document.write(getfulltime(4820)); */


