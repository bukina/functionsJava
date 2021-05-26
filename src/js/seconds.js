"use strict";

function getseconds(_hour, _min, _sec) {
    return _hour * 3600 + _min * 60 + _sec

}

document.write(getseconds(1, 20, 20) + ' ' + 'seconds');