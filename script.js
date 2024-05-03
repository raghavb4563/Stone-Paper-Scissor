
let btn=document.querySelector("button");
let headingRes=document.querySelector(".result");
btn.addEventListener("click",play);



function getComputerChoice(){
    
    let index=Math.floor(Math.random() * 3);
    let choices=["Rock" , "Paper" , "Scissor"];
    return choices[index];
}

function getHumanChoice(){
    let HumanChoice=prompt("Choose a option from Rock, Paper or Scissor");
    return HumanChoice;
}

function play(){
    let userChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    console.log(computerChoice);
    
    let result=-1;

    
    if(userChoice=="Rock"){
        if(computerChoice=="Scissor"){
            result=1;
        }
        else if(computerChoice=="Paper"){
            result=0;
        }
    }
    else if(userChoice=="Scissor"){
        if(computerChoice=="Paper"){
            result=1;
        }
        else if(computerChoice=="Rock"){
            result=0;
        }

    }
    else{
        if(computerChoice=="Rock"){
            result=1;
        }
        else if(computerChoice=="Scissor"){
            result=0;
        }
    }

    if(result==1){
        headingRes.textContent="Congratulations! You Won";
    }
    else if(result==0){
        headingRes.textContent="Better luck next time";
    }
    else{
        headingRes.textContent="It is a draw!";   
    }




}