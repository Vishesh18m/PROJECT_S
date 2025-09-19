
const timer = document.getElementById("timer");
let foundCount = 0;

let girlImg = document.querySelectorAll(".princess");
for (const img of girlImg) {
    img.addEventListener("click",pFound);
}

function pFound(){
    let girlId = this.getAttribute("id");
    let girl = document.querySelector(`#${girlId}`);
    girl.classList.add("found");
    girl.removeEventListener("click",pFound);
    foundCount++;

    if(foundCount==3){

    }
    
}

function timeStart(){
    console.log("start");
    document.querySelector(".items").classList.remove("pointer-none");
    document.querySelector(".starter").classList.add("hide");
    let timeLeft = 30;
    const countdown = setInterval(()=> {
        timer.innerText = timeLeft;
        timeLeft--;

        if(timeLeft==0){
            clearInterval(countdown);
            document.querySelector(".starter").classList.remove("hide");
            document.querySelector(".items").classList.add("pointer-none");
        }

        else if(foundCount==3 && timeLeft==1){
            document.querySelector(".items").classList.add("pointer-none");
            clearInterval(countdown);
            WonGame();
        }

    },1000);
}

let okBtn = document.querySelector(".btn");
okBtn.addEventListener("click",timeStart)

function WonGame(){
    okBtn.removeEventListener("click",timeStart);
    document.querySelector(".gameOver").classList.remove("hide")
}

const audio = document.getElementById("bg-music");
audio.volume = 0.5;