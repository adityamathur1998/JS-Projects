let countEl = document.getElementById("count");

function onDecrement(){
    let prevCount = parseInt(countEl.textContent);
    let updatedCount = prevCount - 1;
    countEl.textContent = updatedCount;
    if (updatedCount < 0){
        countEl.style.color = "red"
    } else if (updatedCount > 0) {
        countEl.style.color = "blue"
    } else {
        countEl.style.color = "black"
    }
}

function onReset() {
    let updatedCount = 0;
    countEl.textContent = 0;
    countEl.style.color = "black"
}

function onIncrement() {
    let prevCount = parseInt(countEl.textContent);
    let updatedCount = prevCount + 1;
    countEl.textContent = updatedCount;
    if (updatedCount < 0){
        countEl.style.color = "red"
    } else if (updatedCount > 0) {
        countEl.style.color = "blue"
    } else {
        countEl.style.color = "black"
    }
}