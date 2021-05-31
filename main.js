let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hundredSeconds = 0;
let tenSeconds = 0;
let seconds = 0;
let tenthSecond = 0;

let count = "reset";



function stopWatch(){
  tenthSecond++;
  if(tenthSecond / 10 == 1){
    seconds++;
    tenthSecond = 0;
    if(seconds / 10 == 1){
      tenSeconds++;
      seconds = 0;
      if(tenSeconds / 10 == 1){
        hundredSeconds++;
        tenSeconds = 0;
      }
    }
  }
  timer.innerHTML = hundredSeconds + ":" + tenSeconds + ":" + seconds + ":" + tenthSecond;
}

let stopWatchInterval;

start.addEventListener("click", function(){
  if(count == "reset" || count == "stop"){
  stopWatchInterval = setInterval(stopWatch, 100);
  count = "start";
  } 
})

stop.addEventListener("click", function(){
  if(count == "start"){
  clearInterval(stopWatchInterval);
  count = "stop";
  }
})

reset.addEventListener("click", function(){
  if(count == "start" || count == "stop"){
  clearInterval(stopWatchInterval);
  timer.innerHTML = "0:0:0:0";
  count = "reset";
  }
})