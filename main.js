function main() {
    //HTML ELEMENTS FOR GAME
    const card = document.querySelectorAll('.card');

    //FUNCTION START GAME DISPLAY
    function startGame() {
        const start = document.querySelector('.start-game');
        const gameOver = document.querySelector('.game-over');

        gameOver.style.display = 'none';
        gameOver.classList.remove('visible');

        start.addEventListener('click', function (event) {
            event.preventDefault();
            start.classList.remove('visible');
            start.style.display = 'none';

            //FUNCTION FOR TIMER
            function startTimer() {
                const timeRemaining = document.getElementById("time-remaining");
                let timeLeft = timeRemaining.innerHTML;

                const downloadTimer = setInterval(function () {
                    timeLeft--;
                    timeRemaining.innerHTML = timeLeft;
                    console.log('Time Remaining:', timeRemaining);
                    if (timeLeft <= 0)
                        clearInterval(downloadTimer);
                }, 1000);
            }
            startTimer();
        });
    }
    startGame();

    //FUNCTION GAME OVER DISPLAY
    function gameOver() {
    
    }
    gameOver();

    //ELEMENTS FOR CARDS FLIP / MATCH /
    let matchCard = false;
    let card1, card2;

    //FUNCTION TO FLIP CARDS
    function flipCard() {
        
        //SCORE KEEPER ELEMENT
        const score = document.querySelector('#score-keeper');
        let scores = score.innerHTML; 
        console.log('score', score);

        //LOOP THROUGH CARDS
        for (let i = 0; i < card.length; i++) {
            card[i].addEventListener('click', function (event) {
                event.preventDefault();

                //TOGGLE CARD TO CLASS FOR FLIPPING 
                card[i].classList.toggle('flipCard');

                //IF STATEMENT FOR IF CARD MATCHES OR NOT
                if (matchCard === false) {
                    matchCard = true;
                    card1 = this; //card[i]; 
                } else {
                    matchCard = false;
                    card2 = this; //card[i];

                    console.log('card1', card1);
                    console.log('card2', card2);

                    //IF CARDS MATCH
                    if (card1.dataset.image === card2.dataset.image) {
                        card1.classList.toggle('matched');
                        card2.classList.toggle('matched');
                    }
                    //IF CARDS NOT MATCH
                    else {
                        setTimeout(() => {
                            card1.classList.remove('flipCard');
                            card2.classList.remove('flipCard');
                        }, 800);
                    }
                }
            });
        }
    }
    flipCard();
}
main();


