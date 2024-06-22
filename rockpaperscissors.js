const lightMode = document.querySelector("#light");
const darkMode = document.querySelector("#dark");
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#userscore");
let compScore = document.querySelector("#compscore");
let msgBox = document.querySelector("#msg-box");
let resetButton =document.querySelector("#reset-btn")
let userChoice;
let userCount=0;
let compCount=0;
const arr =['rock','paper','scissors'];



let checkWinner = (userSelection) =>{
    const compSelection = arr[Math.floor(Math.random()*3)];
    let winner;

    if(userSelection !== compSelection){
        if(userSelection === "rock"){
            winner = compSelection === 'scissors' ? "user" : "computer";
            compSelection === 'scissors' ? userCount++ : compCount++ ;
        }else if(userSelection === "paper"){
            winner = compSelection === 'rock' ? "user" : "computer";
            compSelection === 'rock' ? userCount++ : compCount++ ;
        }else if(userSelection === "scissors"){
            winner = compSelection === 'paper' ? "user" : "computer";
            compSelection === 'paper' ? userCount++ : compCount++ ;
        }
        userScore.innerText = userCount;
        compScore.innerText = compCount;
        if(winner === 'user'){
            msgBox.innerText = `you have won, computer selection is ${compSelection}`
            msgBox.style.backgroundColor = 'green';
        }else if(winner === 'computer'){
            msgBox.innerText = `you have lost, computer selection is ${compSelection}`
            msgBox.style.backgroundColor = 'red';
        }

    }else{
        console.log("its a draw")
        msgBox.innerText = "Hey!! that's a draw";
        msgBox.style.backgroundColor = '';
    }
}



choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        userChoice = choice.getAttribute("id");
        checkWinner(userChoice);
    })
})

resetButton.onclick = () =>{
    userCount=0;
    compCount=0;
    userScore.innerText = userCount;
    compScore.innerText = compCount;
    msgBox.innerText = "make a selection";
    msgBox.style.backgroundColor = '';
}

darkMode.onclick = () =>{
    const rootElement = document.querySelector(":root");
    rootElement.style.setProperty('--background-color','#000814');
    rootElement.style.setProperty('--primary-color','#001D3D');
    rootElement.style.setProperty('--font-color','white');
    lightMode.style.zIndex = '1';
}

lightMode.onclick = () =>{
    const rootElement = document.querySelector(":root");
    rootElement.style.setProperty('--background-color','');
    rootElement.style.setProperty('--primary-color','');
    rootElement.style.setProperty('--font-color','black');
    lightMode.style.zIndex = '';
}