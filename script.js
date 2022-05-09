let hours = 0;
let minutes = 0;
let seconds = 0;


const startButton = document.createElement('button');
startButton.innerText = 'Start';
startButton.style.background='rgb(146, 197, 218)';
const stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.style.background='rgb(146, 197, 218)';
const resetButton = document.createElement('button');
resetButton.innerText = 'Reset';
resetButton.style.background='rgb(146, 197, 218)';


window.onload = function () {
    let h = document.getElementById('hours');
    let m = document.getElementById('minutes');
    let s = document.getElementById('seconds');
    let t = document.getElementById('timecounter');

    t.appendChild(startButton);
    t.appendChild(stopButton);
    t.appendChild(resetButton);

   

    startButton.addEventListener('click', function () {

        
        starttimer = setInterval(function () {


            seconds++ ;
            s.innerText=seconds  < 10 ? '0' + seconds : seconds;  
            

            if (seconds == 60 ) {
                seconds = 00;
                minutes++;
                m.innerText=minutes  < 10 ? '0' + minutes : minutes;
                

            }
             
            if (minutes == 60) {
                minutes = 00;
                hours++;
                h.innerText=hours  < 10 ? '0' + hours : hours;                         
                
            }

        }, 1000)
        
        startButton.style.pointerEvents='none';
    })

    stopButton.addEventListener('click', function () {
        clearInterval(starttimer)
       startButton.style.pointerEvents='visible';
    })

   resetButton.addEventListener('click', function () {

        seconds = '0' + 0;
        minutes = "0" + 0;
        hours = "0"  + 0;

        s.innerText = seconds;
        m.innerText = minutes;
        h.innerText = hours;

    })
}



