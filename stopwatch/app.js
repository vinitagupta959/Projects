let timerDisplay=document.querySelector('.timerDisplay');
let startBtn=document.getElementById('startbtn');
let stopBtn=document. getElementById('stopbtn');
let resetBtn=document. getElementById('resetbtn');
let msec = 0;
let secs = 0;
let mins = 0;
let timerId=null;
startBtn.addEventListener('click',function(){
    if (timerId!==null){
        clearInterval(timerId);
    }
  timerId=setInterval(startTimer,10);
});
stopBtn.addEventListener('click',function(){
    clearInterval(timerId); 
});
resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    msec=0;
    secs=0;
    mins=0;
    timerDisplay.innerHTML='00:00:00';
});
function startTimer(){
    msec++;
    if(msec===100){
        msec=0;
        secs++;
        if(secs===60){
            secs=0;
            mins++;
        }
    }
    let msecStr;
    if (msec<10){
        msecStr='0'+msec;
    }
    else{
        msecStr=msec;
    }
    let secsStr;
    if (secs<10){
        secsStr='0'+secs;
    }
    else{
        secsStr=secs;
    }
    let minsStr;
    if (mins<10){
        minsStr='0'+mins;
    }
    else{
        minsStr=mins;
    }
    timerDisplay.innerHTML=`${minsStr}:${secsStr}:${msecStr}`;

}
