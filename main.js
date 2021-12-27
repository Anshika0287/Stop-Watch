
var start = document.getElementById('start');
var reset = document.getElementById('reset');

var hrs = document.getElementById("hour");
var min = document.getElementById("minute");
var sec = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
            if(hrs.value == 0 && min.value == 0 && sec.value == 0){
              clearInterval(startTimer);
              alert("Time Up!!!!!");
            
            } 
            
         
        }, 1000);
    }
    startInterval();
})

reset.addEventListener('click', function(){
    hrs.value = 0;
    min.value = 0;
    sec.value = 0;
    //stop the timer after pressing "reset"
    stopInterval()
})

function timeout()
{
    alert("timeout");
    return ;
}

function timer(){
    if(hrs.value == 0 && min.value == 0 && sec.value == 0){
        hrs.value = 0;
        min.value = 0;
        sec.value = 0;
        
    
    } else if(sec.value != 0){
        sec.value--;
    } else if(min.value != 0 && sec.value == 0){
        sec.value = 59;
        min.value--;
    } else if(hrs.value != 0 && min.value == 0){
        min.value = 60;
        hrs.value--;
    }
    return ;
}

//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {

    clearInterval(startTimer);

}