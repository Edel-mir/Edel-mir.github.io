"use strict";
let btn = document.querySelector(".btn");
let ans = document.querySelector(".answer h1");

btn.onclick = function () {
    let inputs = document.querySelectorAll(".textbox input");
    let selects = document.querySelectorAll(".textbox select");
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
    let str = String(top / bottom).slice(0, 4) !== NaN ? String(top / bottom).slice(0, 4): "Неверные данные";
    ans.innerHTML = "Ответ: " + str;
}
