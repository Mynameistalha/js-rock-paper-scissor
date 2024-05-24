let compScore=0;//first we take score zero both user and comp
let userScore=0;

const choice=document.querySelectorAll(".choices");
const msgPara=document.querySelector("#msg");
const userScore1=document.querySelector("#User");
const compScore1=document.querySelector("#system");




const compChoice=()=>//then we make the  function ton ganerate the random by computer
{
    const options=["rock","paper","scissor"]
   const ind= Math.floor(Math.random() * 3);
   return options[ind];
}
const drawGame = () => //same we make the fucntion if game was draw and show the game was draw
{
    // console.log("Match is draw");
    msgPara.innerText="Game was draw";
    msgPara.style.backgroundColor="yellow";

}
const showWinner=(userWin,userChoice,genComp)=>//here we make the funxtion to show how is the winner
    {
        if(userWin)
            {
               
                msgPara.innerText="User Win the game ";
                msgPara.style.backgroundColor="red";
                userScore++;//for count of user score
                userScore1.innerText=userScore;///show the count of user score to user

            }
            else{
                // console.log("Computer Win the to add count number");
                msgPara.innerText="User lose the game" ;
                msgPara.style.backgroundColor="green";
                compScore++;
                compScore1.innerText=compScore;
            }
    }


const playGame = (userChoice) => //game rule here how we can play the game 
    {
    //    console.log("user choice=",userChoice);
       //Generate computer  choice
        const genComp = compChoice();
        // console.log("comp choice=", genComp);

        if(userChoice === genComp)
            {
                drawGame();
            }
            else{
                let userWin=false;
                if(userChoice==="rock" && genComp==="paper")
                    {
                      console.log("Computer Won the match:0");
                     userWin=false;
                    }
                    else if(userChoice==="rock" && genComp==="scissor")
                        {
                            console.log("User Won the match :1");
                          userWin=true;

                        }
                        else if(userChoice==="paper" && genComp==="scissor")
                            {
                                console.log("Computer Won the match:2");
                                userWin=false;
    
                            }
                            else if(userChoice==="paper" && genComp==="rock")
                                {
                                    console.log("user Won the match:3");
                                     userWin=User;
        
                                }
                                else if(userChoice==="scissor" && genComp==="paper")
                                    {
                                        console.log("User Won the match:4");
                                        userWin=true;
            
                                    } else if(userChoice==="scissor" && genComp==="rock")
                                        {
                                            console.log("Computer Won the match:5");
                                          userWin=false;
                                         
                                          return userWin;
                                        }

                                        // return userWin;

                                        showWinner(userWin,userChoice,genComp);
            }

    };

choice.forEach(choices=>  //three choices for each user to individual go at each div perfor the click event
    {
        // console.log("Element",choices);
        choices.addEventListener('click',()=>
            {
              const userChoice=choices.getAttribute("id");
                // console.log("pic was clicked",userChoice);
                playGame(userChoice);
            }); 
    });
    


    //date 
    //18/05//2024

     
   
