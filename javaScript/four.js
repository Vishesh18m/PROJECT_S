let container = document.querySelector(".container");

let count = 1;

setTimeout(()=>{
    one();
    setTimeout(()=>{
        one();
        setTimeout(()=>{
            one();
            setTimeout(()=>{
                one();
            },30000);
        },30000);
    },30000);
},100);

    






function one(){
    for(let i = 1 ; i<=7 ; i++){
        container.children[count++].classList.add(`bubble${i}`);
    }
    console.log("one done ");    
}



