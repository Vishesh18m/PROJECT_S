let btn = document.querySelector("#btn");
let input = document.querySelector("#Name")
btn.addEventListener("click", submit);

let wrongName = document.querySelector("#wrongName");
function submit(){
    console.log(input.value);
    if(input.value=="Siya" || input.value=="siya" || input.value=="SIYA"){
        window.location.href = "./pageOne.html";
    }
    else if(input.value=="Mayra" || input.value=="MAYRA" || input.value=="mayra"){
        window.location.href = "./last.html";
    }
    else{
        wrongName.classList.add("wrongName");
        wrongName.innerText=`Sorry this website is not made for ${input.value}.`;
        input.value="";
        setTimeout(()=>{
            wrongName.classList.remove("wrongName");
        },7000)

    }
}

const audio = document.getElementById("bg-music");
audio.volume = 0.5;

document.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
}, { once: true });
