let message = "Siya's smile";
let ans = "";
let index = 0;
let points = 0;

let options = ["Your Kindness😚","Your Big dreams and Hardwork🤠","Flowers in Your Hairs😚","You in Traditional dress with mathe pe choti bindi 🤗"]

const input = document.getElementById("text-input");

input.addEventListener("keydown", function(e) {
    e.preventDefault(); // stop the real key from appearing

    if (index < message.length) {
        input.value += message[index]; // add the next character
        index++;
        points++;
        if(points==16){
            crossbtn.classList.remove("hide");
        }
    }
});

let allcheckBox = document.querySelectorAll(".checkbox");
for (const checkBox of allcheckBox) {
    checkBox.addEventListener("change",changeOption);
}

function changeOption(){
    points++;
    let boxId = this.getAttribute("id");
    document.querySelector(`#opt${boxId[3]}`).innerText = options[boxId[3]-1];
    this.removeEventListener("change",changeOption);
    console.log(points);
    
    if(points==16){
        crossbtn.classList.remove("hide");
    }
}

let crossbtn = document.querySelector(".cross");
crossbtn.addEventListener("click",()=>{
    document.querySelector("h1").classList.add("hide");
    document.querySelector(".form").classList.add("hide");
    crossbtn.classList.add("hide");
    document.querySelector(".wheel-container").classList.add("showWheel");

});

let spinbtn = document.querySelector(".spin-btn");
let wheel = document.querySelector(".wheel");
spinbtn.addEventListener("click",()=>{
    wheel.classList.add("spin");
    setTimeout(()=>{
        wheel.classList.remove("spin");
        showPrize();
    },6000)
})

function showPrize(){

}

const audio = document.getElementById("bg-music");
audio.volume = 0.4;
