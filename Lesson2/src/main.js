import {diffDates, diffToHtml} from "./datecalc.js";
import {Timer} from "./timer.js";
import {formatError} from "./utils.js";
import {switcher} from "./switch.js"

import chunk from "lodash/chunk";
console.log(chunk(['a', 'b', 'c', 'd'], 2));

const radioButtons = document.getElementById("switcher");
const timerDiv = document.getElementById("timer");

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

switcher(radioButtons, [dateCalcForm, timerDiv])

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let {firstDate, secondDate} = event.target.elements;
    firstDate = firstDate.value
    secondDate = secondDate.value

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}

const timer = timerDiv.querySelector('#timerTime')

timerDiv.querySelector("#btnStart").addEventListener("click", handleTimerStart);
timerDiv.querySelector("#btnStop").addEventListener("click", handleTimerReset);

const myTimer = new Timer

function handleTimerStart() {
    myTimer.start(timer.value)
}
function handleTimerReset(){
    myTimer.reset()
    stopTimer()
}

function stopTimer(){
    timer.removeAttribute('readonly')
    timer.value = "00:00:00"
}

myTimer.onStart = ()=>{
    timer.setAttribute('readonly',true)
}
myTimer.onTime = stopTimer
myTimer.onTick = ()=>{
    timer.value = myTimer.getTimeLeft()
}
