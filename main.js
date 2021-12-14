//BIG FUNCTION FOR GAME TO DO FEATURES
function main() {
    //HTML ELEMENTS 
    const card = document.querySelectorAll('#card');
    
    for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', function (event) {
        event.preventDefault();
        card[i].classList.toggle('flipCard');
        console.log('Card Flip'); 
    });
}
}
main();

