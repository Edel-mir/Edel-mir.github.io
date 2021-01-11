"use strict";
let btn = document.querySelector("#submit");
let ans = document.querySelector("#answer h2");

btn.onclick = function () {
    let inputs = document.querySelectorAll(".form-control");
    let selects = document.querySelectorAll(".form-select");
    let top = 0;
    let bottom = 0;
    for (let i = 0; i < 10; i++) {
        let mark = Number(selects[i].value);
        let cr = Number(inputs[i].value);
        if (mark !== 99 && cr !== 0) {
            top += mark * cr;
            bottom += cr;
        }
    }
    let a = String(top / bottom).slice(0, 4)
    if (a === NaN){
        ans.innerHTML = "Ошибка";
    } else {
        ans.innerHTML = a;
    } 
}
