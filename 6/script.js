
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


let container_width = 500

firstObs.style.opacity = 0;
secondObs.style.opacity = 0;

start.addEventListener('click', game)
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

function game()
{
    

    
    let playerScore = 0
    let opacity_up = true
    let opacity_down = false
    let a = 0
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
    function player1_opacity(){
        player2.style.opacity = "0"
        player1.style.opacity = "1"
        opacity_up = true
        opacity_down = false
    }
    // BackgroundMovement setinterval
    let backgroundMovement = setInterval(()=>{
        backgroundImage.style.backgroundPosition=  -a* 1 + "px 0px";
        a = a + 5;
    }, 0.5)
    
    let k = 30;
    let j = 0;
    let f = 50;
    let istrue1  = true;
    let istrue2 = true;
    newGame.addEventListener('click', ()=>{location.reload()})
    let realFunction = setInterval(()=>{
        let leftFirstObs = firstObs.getBoundingClientRect().left;
        let leftSecondObs = secondObs.getBoundingClientRect().left;
        if(leftFirstObs < (container.getBoundingClientRect().left + container_width))
        {
            firstObs.style.opacity = 1
        }
        if(leftSecondObs < (container.getBoundingClientRect().left + container_width))
        {
            secondObs.style.opacity = 1
        }
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
            f = Math.floor(Math.random() * 10) + 1;
        }
        
        
        let leftPlayer1 = player1.getBoundingClientRect().left + 90;
        let leftPlayer2 = player2.getBoundingClientRect().left + 90;
    
        
        if(((leftPlayer1 - leftFirstObs) > 0 ) && ((leftPlayer1 - leftFirstObs) < 100 ) && (opacity_up == true))
        {
            gameOver.style.opacity = "1"
            newGame.disabled = false
            start.disabled = true
            clearInterval(backgroundMovement)
            clearInterval(realFunction)
        }
        else if((leftPlayer2 - leftSecondObs > 0) && ((leftPlayer2 - leftSecondObs) < 100 ) && (opacity_down == true))
        {
            gameOver.style.opacity = "1"
            newGame.disabled = false
            start.disabled = true
            clearInterval(backgroundMovement)
            clearInterval(realFunction)
        }
        
        leftFirstObs = firstObs.getBoundingClientRect().left;
        leftSecondObs= secondObs.getBoundingClientRect().left;
        if(((((leftFirstObs-leftSecondObs) <= 0) && ((leftFirstObs-leftSecondObs) >= -290))|| (((leftSecondObs-leftFirstObs) <= 290) && ((leftSecondObs-leftFirstObs) >= 0))) && ((leftFirstObs < (leftPlayer1 + 100)) || ((leftSecondObs < (leftPlayer2 + 100)))))
        {
            const randomNumber2 = Math.floor(Math.random() * 2) + 1;
            
            if(randomNumber2 == 1)
                {
                    if(leftFirstObs < container.getBoundingClientRect().right )
                    {   
                        console.log(leftPlayer1)
                        console.log('hello')
                        firstObs.style.transform = "translateX(" + (-k + 140) +"px)"
                        k = k -140
                    }
                    istrue1 = false
                    istrue2 = true
                }
            else
            {
                if(leftSecondObs < container.getBoundingClientRect().right )
                {
                    console.log('world')
                    secondObs.style.transform = "translateX(" + (-j + 190) +"px)"
                    j = j - 90
                }
                istrue2 = false;
                istrue1 = true;
            }
        }
        

    
        if(istrue1 == true)
        {
        firstObs.style.transform = "translateX(" + -k + "px)";
        k = k + h ;
        
        if(k > container_width *2)
        {
            k = 0;
            istrue2 = true;
            playerScore++
            score.innerHTML = "<h1>Score = " + playerScore + "0</h1>" 
        }
        }
        if(istrue2 == true){
        secondObs.style.transform = "translateX(" + -j + "px)";
        j = j + i;
        if(j > container_width * 2.4)
        {
            playerScore++
            score.innerHTML = "<h1>Score = " + playerScore + "0</h1>" 
            istrue1 = true;
            j = 122;
        }
        }
    }
    , f)
}
