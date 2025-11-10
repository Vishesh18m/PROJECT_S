const audio = document.getElementById("bg-music");
audio.volume = 0.25;

const audio2 = document.getElementById("firework-music");
audio2.volume = 0.4;

let btn = document.querySelector("#btn-container");
let timeleft = 15;
let time = document.querySelector(".time");
let timer = document.querySelector(".timer");

let countdown = setInterval(()=>{
    time.innerText = `wait - ${timeleft}`;
    timeleft--;

    if(timeleft<0){
        clearInterval(countdown);
        timer.classList.add("hide");
        btn.classList.remove("hide");
    }
},1000)
