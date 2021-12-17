//HTML ELEMENTS FOR GAME
const card = document.querySelectorAll('.card');
const timer = document.querySelector('#time-remaining');
const score = document.querySelector('#score-keeper');
const img = document.querySelectorAll('.img');

//ELEMENTS FOR CARDS FLIP / MATCH
let matchCard = false;
let card1, card2;

//FUNCTION TO FLIP CARDS
function flipCard() {

    //LOOP THROUGH CARDS
    for (let i = 0; i < card.length; i++) {
        card[i].addEventListener('click', function (event) {
            event.preventDefault();
            
            //TOGGLE CARD TO CLASS FOR FLIPPING 
            card[i].classList.toggle('flipCard');

            //IF STATEMENT FOR IF CARD MATCHES OR NOT
            if (matchCard === false) {
                matchCard = true;
                card1 = this;
            } else {
                matchCard = false;
                card2 = this; 

                console.log('card1', card1);
                console.log('card2', card2);

                //IF CARDS MATCH
                if (card1.dataset.image === card2.dataset.image ) {
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

