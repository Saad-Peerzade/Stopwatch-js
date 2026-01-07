const display= document.getElementById("display");
let timer= null;
let startTime=0;
let elapsetime = 0;
let isrunningTime=false;

function start(){
if(!isrunningTime){
    startTime=Date.now() - elapsetime;
    timer=setInterval(update , 10);
    isrunningTime=true;
}
}

function stop(){
    if(isrunningTime){
        clearInterval(timer);
        elapsetime=Date.now() - startTime;
        isrunningTime=false;
       
    }
}

function reset(){
        clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

}

function update(){
    const currentTime = Date.now();
    elapsetime = currentTime - startTime;

    let hours = Math.floor(elapsetime/(100*60*60));
    let minutes = Math.floor(elapsetime/(100*60)/60);
    let seconds = Math.floor(elapsetime/1000 % 60);
    let milliseconds=Math.floor(elapsetime%1000/10);
    display.textContent = "00:00:00:00";


    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");

    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;
}