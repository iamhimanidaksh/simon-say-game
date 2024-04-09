
        let colors = ["green","red","blue","yellow"];
        let gameSeq = [];
        let userSeq = [];
        let level = 0;
        let highestScore = 0;

        let startGame = false;
        let buttons = document.querySelectorAll(".button");
        let h2 = document.querySelector("h2");

       document.addEventListener("keypress",function(){
        if(startGame==false){
           startGame = true;
           levelUp(level);
        }
        });


        for(let button of buttons){
            button.addEventListener("click",function(){
                if(startGame){
                userFlashButtons(button);
                }
            });
        }

        function randomColor(){
       let randIdx = Math.floor(Math.random()*4);
       let randColor = colors[randIdx];
       let randButton = document.querySelector(`.${randColor}`);
       gameSeq.push(randColor);
       console.log(gameSeq);
        gameFlashButtons(randButton);
           }

       function gameFlashButtons(btn){
        btn.classList.add("gameflash");
            setTimeout(function(){
                btn.classList.remove("gameflash");
            },250)
       }

        function userFlashButtons(btn){
            btn.classList.add("userflash");
            let userColor = btn.getAttribute("id");
            userSeq.push(userColor);
            console.log(userSeq);
            check(userSeq.length-1);
            setTimeout(function(){
                btn.classList.remove("userflash");
            },250);
        }


        function levelUp(){
        level++;
        h2.innerText = `Level ${level}`;
        randomColor();
       }
        
        function gameReset(){
            startGame = false;
            gameSeq = [];
            userSeq = [];
            level = 0;
        }

        function check(idx){
            
                if(gameSeq[idx]==userSeq[idx]){
                    if(gameSeq.length===userSeq.length){
                        userSeq = [];
                        setTimeout(function(){
                            levelUp(level);
                        },250);
                    }
                }
                else{
                    h2.innerText = `GameOver! Your Score is ${level}`;
                    if(highestScore<level){
                    highestScore = level;
                    let p = document.querySelector("p");
                    p.innerText = `Highest Score is ${highestScore}`;
                    }
                    let body = document.body.style.backgroundColor = "red";
                    setTimeout(function(){
                    let body = document.body.style.backgroundColor = "rgb(25, 48, 57)";
                    },250)
                    gameReset();

                }
            }
