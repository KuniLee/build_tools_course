import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { switcher } from "./switch.js"

const radioButtons = document.getElementById("switcher");
const timerDiv = document.getElementById("timer");
const dateCalcForm = document.getElementById("datecalc"); 
const dateCalcResult = document.getElementById("datecalc__result"); 

switcher(radioButtons, [dateCalcForm, timerDiv])


dateCalcForm.addEventListener("submit", handleCalcDates); 

function handleCalcDates(event) { 
    dateCalcResult.innerHTML = ""; 
    event.preventDefault(); 

    let { firstDate, secondDate } = event.target.elements; 
    firstDate = firstDate.value, secondDate = secondDate.value; 
    
    if (firstDate && secondDate) { 
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}