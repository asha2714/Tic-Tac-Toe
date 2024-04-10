let spanEle=document.getElementById("spanEle");
let result=document.getElementById("result");
let ResetBtn=document.getElementById("ResetBtn");
let boxes=document.querySelectorAll(".box");
let para=document.getElementById("para");


let turnx=true;
let c=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

boxes.forEach(e => {
    e.addEventListener("click", () => {
        if(turnx) {

            e.textContent="X";
            turnx=false;
            spanEle.textContent="O";
            e.classList.add("sty");
            
        }
        else {
            e.textContent="O";
            turnx=true;
            spanEle.textContent="X";
            e.classList.add("sty");
        }
        e.disabled=true;
        c++;

        let isWinner=checkWinner();

        if(c===9 && !isWinner) {
            drawGame();
        }
    })
})

const drawGame= () => {
    result.textContent="Game Draw.";
    for(let box of boxes) {
        box.disabled=true;
    }
    result.classList.add("result-red");

    
}

const checkWinner=() => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].textContent;
        let pos2Val = boxes[pattern[1]].textContent;
        let pos3Val = boxes[pattern[2]].textContent;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
              result.textContent=`${pos1Val} is the Winner`;
              result.classList.add("result-green");

              for (let box of boxes) {
                box.disabled = true;
              }
              return true;
            }
        }
    }
    
}

ResetBtn.addEventListener("click", () => {
    turnx=true;
    c=0;
    result.textContent="";
    
    for (let box of boxes) {
        box.disabled = false;
        box.textContent = "";
      }
      para.classList.remove("hide");
      spanEle.classList.remove("hide");
      spanEle.textContent="X";
      result.classList.remove("result-green");
})