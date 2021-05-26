"use strict";

function getfulltime(_number) {

    let a = (_number - (_number % 3600)) / 3600
    let b = (_number % 3600 - _number % 60) / 60
    let c = _number % 60
    return a + ':' + b + ':' + c

}

document.write(getfulltime(4820));