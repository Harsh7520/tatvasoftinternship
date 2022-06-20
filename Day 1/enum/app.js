"use strict";
exports.__esModule = true;
var Days;
(function (Days) {
    Days[Days["mon"] = 10] = "mon";
    Days[Days["tue"] = 11] = "tue";
    Days[Days["wed"] = 12] = "wed";
    Days[Days["thu"] = 13] = "thu";
    Days[Days["fri"] = 14] = "fri";
    Days[Days["sat"] = 15] = "sat";
    Days[Days["sun"] = 16] = "sun";
})(Days || (Days = {}));
function whichDay(day) {
    return day;
}
console.warn(whichDay(Days.sat));
