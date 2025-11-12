let container = document.querySelector(".container");

let count = 0;
setTimeout(() => {
    one();
    setTimeout(() => {
        one();
        setTimeout(() => {
            one();
            setTimeout(() => {
                one();
                setTimeout(() => {
                    one();
                    setTimeout(() => {
                        last();
                    }, 35000);
                }, 35000);  //25000
            }, 40000);  //30000
        }, 40000);  //30000
    }, 40000);  //30000
}, 1000);   //100





function last() {
    let lastMsg = document.querySelector(".last-msg");
    lastMsg.classList.remove("hide");
}


function one() {
    try {
        for (let i = 0; i < 7; i++) {
            container.children[count].children[i].classList.add(`bubble${i}`);
        }
        count++;
    }
    catch (err) {
        console.log(err);
    }

}



console.log(container.children);
