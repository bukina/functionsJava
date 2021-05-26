"use strict";

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

document.write(min(2, 8));