const hourDisplay = document.querySelector('.js-hour')
const minuteDisplay = document.querySelector('.js-minute')
const secondDisplay = document.querySelector('.js-seconds')
const playButton = document.querySelector('.js-play-button')
const pauseButton = document.querySelector('.js-pause-button')
const resetButton = document.querySelector('.js-reset-button')

let hours = 0;
let minutes = 0;
let seconds = 0;
let isPlaying = false;
let interval ="";

playButton.addEventListener('click', () =>  {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playButton.innerHTML = `<i class = " fa fa-pause"></i>`
        interval = setInterval(() => {
            for (let i = 0; i < 1; i++) {
                if (seconds < 59) {
                    seconds++
                    secondDisplay.innerHTML = "0" + seconds
                        if(seconds > 9) {
                            secondDisplay.innerHTML = seconds
                        }
                } else  if (seconds = 59){
                    seconds = 0;
                    minutes++
                    minuteDisplay.innerHTML = "0" + minutes
    
                        if(minutes > 9) {
                            minuteDisplay.innerHTML = minutes
                        }
                            if (minutes > 59) {
                                minutes = 0;
                                hours++;
                                hourDisplay.innerHTML = "0" + hours
                            }
                } 
            }
        }, 1000)
    } else {
        playButton.innerHTML = `<i class = " fa fa-play"></i>`
        clearInterval(interval)
    }
});

resetButton.addEventListener("click", () => {
    playButton.innerHTML = `<i class = " fa fa-play"></i>`
    clearInterval(interval)
    seconds = 0;
    secondDisplay.innerHTML = "0" + seconds

    minutes = 0;
    minuteDisplay.innerHTML = "0" + minutes

    hours = 0;
    hourDisplay.innerHTML = "0" + hours

})