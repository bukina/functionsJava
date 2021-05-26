"use strict";

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

document.write(time(12, "", 30));