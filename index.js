const cards = Array.from(document.querySelectorAll(".memory-card"));


let firstCard, secondCard;
let isFlipped;

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard() {
    console.log("card flipped")
}
