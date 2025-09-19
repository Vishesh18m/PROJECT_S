const audio = document.getElementById("bg-music");
audio.volume = 0.3;

const audio2 = document.getElementById("firework-music");
audio2.volume = 0.4;

let btn = document.querySelector("#btn-container");
let timeleft = 10;
let time = document.querySelector(".time");
let timer = document.querySelector(".timer");

let countdown = setInterval(()=>{
    time.innerText = `${timeleft}`;
    timeleft--;

    if(timeleft<0){
        clearInterval(countdown);
        timer.classList.add("hide");
        btn.classList.remove("hide");
    }
},1000)