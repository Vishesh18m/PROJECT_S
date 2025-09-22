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
                setTimeout(()=>{
                    one();
                },25000);  //25000
            },30000);  //30000
        },30000);  //30000
    },30000);  //30000
},1000);   //100

    






function one(){
    for(let i = 1 ; i<=7 ; i++){
        container.children[count++].classList.add(`bubble${i}`);
    } 
}



console.log(container.children);