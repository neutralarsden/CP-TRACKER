// variables
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");
const plusminusBtn = document.querySelector(".plusminusBtn");
const minusminusBtn = document.querySelector(".minusminusBtn")
const total = document.querySelector(".total");
const solved = document.querySelector(".solved");
const unsolved = document.querySelector(".unsolved");
let solved_counter = 0;
let unsolved_counter = 0;
let time = 0;
let time_flag = false;
let timer = document.querySelector(".timer");
const timeStop = document.querySelector(".timer-stop");
const timeStart = document.querySelector(".timer-start");
const timeReset = document.querySelector(".timer-reset");

// functions
function updateTotal(t, tcount){
    total.innerHTML = solved_counter + unsolved_counter;
    t.innerHTML = tcount;
}

setInterval(() => {
    if(time_flag){
        time += 1;
        let min = (Math.floor(time/60)).toString().slice(0,2);
        if(min.length < 2) min = '0' + min;
        let sec = (time%60).toString().slice(0,2);
        if(sec.length < 2) sec = '0' + sec;
        timer.innerHTML = min + " : " + sec;
    }
}, 1000);


// execution
plusBtn.addEventListener('click', ()=>{
    solved_counter += 1;
    updateTotal(solved, solved_counter);
});
minusBtn.addEventListener('click', ()=>{
    unsolved_counter += 1;
    updateTotal(unsolved, unsolved_counter);
});
plusminusBtn.addEventListener('click', ()=>{
    if(solved_counter > 0){
        solved_counter -= 1;
        updateTotal(solved, solved_counter);
    }
})
minusminusBtn.addEventListener('click', ()=>{
    if(unsolved_counter > 0){
        unsolved_counter -= 1;
        updateTotal(unsolved, unsolved_counter);
    }
});

timeStop.addEventListener('click', ()=>{
    time_flag = false;
})
timeStart.addEventListener('click', ()=> {
    time_flag = true;
})
timeReset.addEventListener('click', () => {
    time = 0;
    timer.innerHTML = "00 : 00"
})
