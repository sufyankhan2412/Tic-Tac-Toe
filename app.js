document.addEventListener("DOMContentLoaded", () => {
    let boxes = document.querySelectorAll('.box');
    let resetbtn = document.querySelector('#reset');
    let newbutton = document.querySelector('#new-button');
    let msgcontainer = document.querySelector('.msg-container');
    let msg = document.querySelector('.msg');
    let playerO = true;

    const winpatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]
    ];

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            if (playerO) {
                box.innerText = 'O';
                playerO = false;
            } else {
                box.innerText = 'X';
                playerO = true;
            }
            box.disabled = true;
            checkWinner();
        });
    });

    const resetGame = ()=>{
        playerO = true;
        enableboxes();
        msgcontainer.classList.add('hide')
    };

    const disbaleboxes = ()=> {
        for(let box of boxes){
            box.disabled = true;
        }
    };
    const enableboxes = ()=>{
        for(let box of boxes){
            box.disabled = false;
            box.innerText = "";
        }
    };


    const showWinnner = (winner) => {
        msg.innerText = `Congratulations,winner is ${winner}`;
        msgcontainer.classList.remove('hide');
        disbaleboxes();
    };

    const checkWinner = () => {
        for (let pattern of winpatterns) {
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText; 
            let pos3val = boxes[pattern[2]].innerText; 

            if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
                if (pos1val === pos2val && pos2val === pos3val) {
                    console.log(`Winner is ${pos1val}`);
                    showWinnner(pos1val);
                }
            }
        }
    };
    newbutton.addEventListener('click', resetGame);
    resetbtn.addEventListener('click', resetGame);

}
);


