let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const  gencompchoice = () => {
    const options = ["rock","paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawgame = () => {
    console.log("game was draw!")
    msg.innerText = "draww!!"
    msg.style.backgroundColor = "#081b30";
};

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you winn!!");
        msg.innerText = `you winn!! ${userchoice} beat ${compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        console.log("you lose!")
        msg.innerText = `you lose!! ${compchoice} beat ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}



const playgame = (userchoice) => {
    console.log("user choice=", userchoice);
    //comp choice
    const compchoice = gencompchoice();
    console.log("comp choice=", compchoice);

    if(userchoice === compchoice){
        //draw
        drawgame();
    }else{
        let userwin = true;
        if(userchoice ==="rock"){
            //scissor,paper
            userwin=compchoice==="paper"? false:true
        }else if(userchoice==="paper"){
            //rock , paper
            userwin=compchoice==="scissor"? false:true
        }else{
            //rock , scissor
            userwin=compchoice==="rock"? false:true;    
        }
        showWinner(userwin,userchoice, compchoice);
    }
};



choices.forEach((choice)  =>{
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");    
        playgame(userchoice);
    })
    
})