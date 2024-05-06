
let btn=document.querySelector(".new_round");

let Stone=document.querySelector("#Stone");
let Paper=document.querySelector("#Paper");
let Scissor=document.querySelector("#Scissor");

let user_sc=document.querySelector(".user_score");
let computer_sc=document.querySelector(".computer_score");
let choices=document.querySelector(".choices")

let headingRes=document.querySelector(".winner");

let user_score=0;
let computer_score=0;
let turn=0;

btn.addEventListener("click",resetScore);

Stone.addEventListener("click",userStone);
Paper.addEventListener("click",userPaper);
Scissor.addEventListener("click",userScissor);

function getComputerChoice(){
    
    let index=Math.floor(Math.random() * 3);
    let choices=["Stone" , "Paper" , "Scissor"];
    return choices[index];
}
function userStone(){
    console.log("Hello Stone")

    computerChoice=getComputerChoice();

    if(computerChoice=="Scissor"){
        user_score+=1;
    }
    else if(computerChoice=="Paper"){
        computer_score+=1;
    }
    turn+=1;
    user_sc.textContent=`Your Score : ${user_score} `;
    computer_sc.textContent=`Computer Score : ${computer_score} `;
    choices.textContent=`Stone versus ${computerChoice} `;
    headingRes.textContent="You are playing well";
    if(turn==5){
        declare_result();
    }
}

function userPaper(){

    computerChoice=getComputerChoice();

    if(computerChoice=="Stone"){
        user_score+=1;
    }
    else if(computerChoice=="Scissor"){
        computer_score+=1;
    }
    turn+=1;
    user_sc.textContent=`Your Score : ${user_score} `;
    computer_sc.textContent=`Computer Score : ${computer_score} `;
    choices.textContent=`Paper versus ${computerChoice} `;
    headingRes.textContent="You are playing well";
    if(turn==5){
        declare_result();
    }
}

function userScissor(){

    computerChoice=getComputerChoice();

    if(computerChoice=="Paper"){
        user_score+=1;
    }
    else if(computerChoice=="Stone"){
        computer_score+=1;
    }
    turn+=1;
    user_sc.textContent=`Your Score : ${user_score} `;
    computer_sc.textContent=`Computer Score : ${computer_score} `;
    choices.textContent=`Scissor versus ${computerChoice} `;
    headingRes.textContent="You are playing well";
    if(turn==5){
        declare_result();
    }
}

function declare_result(){
    if(user_score > computer_score){
        headingRes.textContent="You Won!"
    }
    else if(computer_score > user_score){
        headingRes.textContent="You Lose!";
    }
    else{
        headingRes.textContent="It is a draw"
    }
}

function resetScore(){
    user_score=0;
    computer_score=0;
    turn=0;
    user_sc.textContent=`Your Score is : ${user_score} `;
    computer_sc.textContent=`Computer Score is : ${computer_score} `;
    headingRes.textContent="All the best";
}