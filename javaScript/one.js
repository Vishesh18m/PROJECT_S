let cardNum = -1;
let cardLines = ["This card is not for the most beautiful and lovely women","Sorry, this card can't hold your charm and cuteness","This card disqualified itself, it knows it's not enough for you","You finally found the right card, now move on to the next page"];
let gifSource = ["./gifs/09-osito-2.webp","./gifs/gato-giovannamagnusjunior.gif","./gifs/hk-png.gif","./gifs/tongue.gif"];
let outCard = document.querySelector(".clicked-card-Out");

outCard.addEventListener("click",hideOutCard);

function hideOutCard(){
    outCard.classList.add("hide");
}


let allBtn = document.querySelectorAll(".btn");
for (const btn of allBtn) {
    btn.addEventListener("click",cardClicked);
}

function cardClicked(){
    let btnId = this.getAttribute("id");
    console.log(btnId);
    let card = document.querySelector(`#${btnId}`);
    card.classList.add("clicked")
    card.removeEventListener("click",cardClicked);

    cardNum++;
    showCard();
}

function showCard(){
    console.log("showcard called");
    let cuteGif = outCard.children[0];
    let line1 = outCard.children[1];
    let line2 = outCard.children[2];

    cuteGif.src = gifSource[cardNum];
    line1.innerText = cardLines[cardNum];
    if(cardNum!=3){
        line2.innerText = "Please choose another card.";
    }
    else{
        outCard.removeEventListener("click",hideOutCard);
        line2.classList.add("nextPageBtn");
        line2.innerText="Next";
        line2.addEventListener("click",nextPage);
    }
    
    outCard.classList.remove("hide");
}

function nextPage(){
    window.location.href="./pageTwo.html";
}

const audio = document.getElementById("bg-music");
audio.volume = 0.4;
