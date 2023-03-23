
let start = document.querySelector('.start')
let backgroundImage = document.querySelector('.image')
    let firstObs = document.querySelector('.first')
    let secondObs = document.querySelector('.second')
    let player1 = document.querySelector('.player')
    let player2 = document.querySelector('.player2')
    let upper  = document.querySelector('.upper')
    let lower = document.querySelector('.lower')
let gameOver = document.querySelector('.game-over')
let score = document.querySelector('.score')
let newGame = document.querySelector('.new-game')
let container = document.querySelector('.image')
let startBtn = document.querySelector('.start-btn')

let container_width = 500

firstObs.style.opacity = 0;
secondObs.style.opacity = 0;

startBtn.addEventListener('click', game)
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 83) {
      // Up arrow key
        game()
    }
    if(event.keyCode == 78)
    {
        location.reload();
    }
})
let a = 0
let backgroundMovement = setInterval(()=>{
    backgroundImage.style.backgroundPosition=  -a* 1 + "px 0px";
    a = a + 5;
}, 0.5)
function game()
{
    startBtn.disabled = true
    let playerScore = 0
    let opacity_up = true
    let opacity_down = false
    let q = 1
    let r = 1
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 38) {
          // Up arrow key
            player2.style.opacity = "0"
            player1.style.opacity = "1"
            opacity_up = true
            opacity_down = false
        } else if (event.keyCode === 40) {
          // Down arrow key
            player1.style.opacity = "0"
            player2.style.opacity = "1"
            opacity_down = true
            opacity_up = false
        } 
    });
    
    lower.addEventListener('click',player2_opacity)
    secondObs.addEventListener('click',player2_opacity)
    player2.addEventListener('click',player2_opacity)
    gameOver.addEventListener('click', player2_opacity)
    function player2_opacity(){
        player2.style.opacity = "1"
        player1.style.opacity = "0"
        opacity_up = false
        opacity_down = true
    }
    
    upper.addEventListener('click',player1_opacity)
    firstObs.addEventListener('click',player1_opacity)
    player1.addEventListener('click',player1_opacity)
    start.addEventListener('click', player1_opacity)
    function player1_opacity(){
        player2.style.opacity = "0"
        player1.style.opacity = "1"
        opacity_up = true
        opacity_down = false
    }
    // BackgroundMovement setinterval
    
    
    let k = 30;
    let j = 0;
    let f = 50;
    
    let istrue1  = true;
    let istrue2 = false;
    
    const randomNumber3 = Math.floor(Math.random() * 2) + 1
        
        if(randomNumber3 == 1)
        {
            istrue1 = true
            istrue2 = false
            firstObs.style.opacity = "1"
            secondObs.style.opacity = "0"
        }
        else{
            istrue1 = false
            istrue2 = true
            firstObs.style.opacity = "0"
            secondObs.style.opacity = "1"
        }
    newGame.addEventListener('click', ()=>{location.reload()})
    let realFunction = setInterval(()=>{
        
        let leftFirstObs = firstObs.getBoundingClientRect().left;
        let leftSecondObs = secondObs.getBoundingClientRect().left;
        let leftPlayer1 = player1.getBoundingClientRect().left + 90;
        let leftPlayer2 = player2.getBoundingClientRect().left + 90;
        // if(leftFirstObs >  leftPlayer1)
        // {
        //     firstObs.style.opacity = 1
        // }
        // if((leftSecondObs > leftPlayer2))
        // {
        //     secondObs.style.opacity = 1
        // }
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        if(randomNumber == 1)
        {
        h= Math.floor(Math.random() * 10) + 40;
        i = Math.floor(Math.random() * 10) + 1;
        f = Math.floor(Math.random() * 10) + 1;
        }
        else{
            h= Math.floor(Math.random() * 10) + 1;
            i = Math.floor(Math.random() * 10) + 40;
            f = Math.floor(Math.random() * 5) + 1;
        }
        
    
        
        if(((leftPlayer1 - leftFirstObs) > 0 ) && ((leftPlayer1 - leftFirstObs) < 100 ) && (opacity_up == true))
        {
            gameOver.style.opacity = "1"
            newGame.disabled = false
            startBtn.disabled = false
            clearInterval(backgroundMovement)
            clearInterval(realFunction)
        }
        else if((leftPlayer2 - leftSecondObs > 0) && ((leftPlayer2 - leftSecondObs) < 100 ) && (opacity_down == true))
        {
            gameOver.style.opacity = "1"
            newGame.disabled = false
            startBtn.disabled = false
            clearInterval(backgroundMovement)
            clearInterval(realFunction)
        }

    
        if(istrue1 == true)
        {
            firstObs.style.transform = "translateX(" + -k + "px)";
            k = k + h ;
        
        if(k > container_width *2)
        {
            const randomNumber5 = Math.floor(Math.random() * 2) + 1;
                if(randomNumber5  == 1)
                {
                firstObs.style.opacity = 1
                secondObs.style.opacity = 0
                istrue1 = true
                istrue2 = false
                }
                else{
                    secondObs.style.opacity = 1
                    firstObs.style.opacity = 0
                    istrue2 = true
                    istrue1 = false
                }
            k = 0;
            playerScore++
            score.innerHTML = "<h1>Score = " + playerScore + "0</h1>" 
        }
        }
        if(istrue2 == true){
            secondObs.style.transform = "translateX(" + -j + "px)"
            j = j + i
            if(j > container_width * 2)
            {
                playerScore++
                score.innerHTML = "<h1>Score = " + playerScore + "0</h1>"
                const randomNumber4 = Math.floor(Math.random() * 2) + 1;
                j = 0
                if(randomNumber4  == 1)
                {
                    firstObs.style.opacity = 1
                    secondObs.style.opacity = 0
                    istrue1 = true
                    istrue2 = false
                }
                else{
                    firstObs.style.opacity = 0
                    secondObs.style.opacity = 1
                    istrue2 = true
                    istrue1 = false
                }
            }
        }
    }
    , f)
}
