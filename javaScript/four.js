let container = document.querySelector(".container");



setTimeout(()=>{
    one();
    setTimeout(()=>{
        two();
        setTimeout(()=>{
            three();
            setTimeout(()=>{
                four();
            },100000);
        },80000);
    },45000);
},100);

    






function one(){
    for(let i = 1 ; i<=7 ; i++){
        container.children[i].classList.add(`bubble${i}`);
    }
    console.log("one done ");    
}

function two(){
    for(let i = 8 ; i<=14 ; i++){
        container.children[i].classList.add(`bubble${i}`);
    }
    console.log("two done ");
}

function three(){
    for(let i = 15 ; i<=21 ; i++){
        container.children[i].classList.add(`bubble${i}`);
    }
    console.log("three done ");
}

function four(){
    for(let i = 22 ; i<=25 ; i++){
        container.children[i].classList.add(`bubble${i}`);
    }
    console.log("four done ");
}



