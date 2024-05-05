let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset-btn");
let newBtn=document.querySelector(".new-btn");
let msgcont=document.querySelector(".msg-cont");
let mssg=document.querySelector("#mssg");
let turn0=true;
const winpat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const reset=()=>{
    turn0=true;
    enableboxes();
    msgcont.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkwinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const show=(winner)=>{
    mssg.innerText=`Congratulations! Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disableboxes();
}
const checkwinner=()=>{
    for(let pat of winpat){
        p1=boxes[pat[0]].innerText;
        p2=boxes[pat[1]].innerText;
        p3=boxes[pat[2]].innerText;
        if(p1!="" && p2!=""&& p3!=""){
            if(p1==p2 && p2==p3){
                console.log("winner",p1);
                show(p1);
            }
        }
    }
};
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);