"use strict";

function square(a, b) {
    if (b == '') {
        return a * a
    }
    if (a == '') {
        return b * b
    }
    return a * b


}

document.write(square(2, 5));