"use strict";

function factorial(number) {
    return (number != 1) ? number * factorial(number - 1) : 1;

}

document.write(factorial(10));