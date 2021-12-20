//MAIN FUNCTION FOR GAME
function main() {

    //FUNCTION START GAME DISPLAY
    function startGame() {
        const start = document.querySelector('.start-game');
        const gameOver = document.querySelector('.game-over');
        const youWin = document.querySelector('.you-win');

        //HIDE GAMEOVER DISPLAY AT START GAME 
        gameOver.style.display = 'none';
        gameOver.classList.remove('visible'); //CLASS IN CSS 
        youWin.style.display = 'none';
        youWin.classList.remove('visible'); //CLASS IN CSS

        //ON CLICK REMOVE DISPLAY 'CLICK TO START' 
        start.addEventListener('click', function (event) {

            start.classList.remove('visible');//CLASS IN CSS  
            start.style.display = 'none';

            //FUNCTION FOR TIMER
            function startTimer() {
                const timeRemaining = document.getElementById("time-remaining");
                let time = timeRemaining.innerHTML;

                //SET INTERVAL FOR TIMER
                const countingDown = setInterval(function () {
                    time--;
                    timeRemaining.innerHTML = time;
                    // console.log('Time Remaining:', timeRemaining);

                    if (time <= 0)
                        clearInterval(countingDown);
                    if (time === 0)

                        //DISLAY GAMEOVER DISPLAY WHEN TIMER IS 0
                        gameOver.style.display = '';
                    gameOver.classList.add('visible'); //CLASS IN CSS 

                }, 900);
            }
            startTimer();
        });
    }
    startGame();

    //FUNCTION TO FLIP CARDS
    function flipCard() {

        //HTML ELEMENTS FOR GAME
        const card = document.querySelectorAll('.card');
        const youWin = document.querySelector('.you-win');

        //ELEMENTS FOR CARDS FLIP / MATCH 
        let matchCard = false;
        let card1, card2;
        
        //LOOP THROUGH CARDS
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function () {

                //TOGGLE CARD TO CLASS FOR FLIPPING 
                card[i].classList.toggle('flipCard');//CLASS IN CSS  

                //IF STATEMENT FOR IF CARD MATCHES OR NOT
                if (matchCard === false) {
                    matchCard = true;
                    card1 = this; //card[i]
                    console.log('card1:', card1);
                    }
                else {
                    matchCard = false;
                    card2 = this; //card[i]
                    console.log('card2:', card2);
                    
                    //IF CARDS MATCH
                if (card1.dataset.image === card2.dataset.image) {
                        card1.classList.toggle('matched'); //CLASS IN CSS 
                        card2.classList.toggle('matched'); //CLASS IN CSS
                        
                    }
                    //IF CARDS NOT MATCH
                else {
                    setTimeout(() => {
                            card1.classList.remove('flipCard'); //CLASS IN CSS  
                            card2.classList.remove('flipCard'); //CLASS IN CSS 

                        }, 800);
                    } 
                }
            });
        }
    }
    flipCard();

};
main();