const cards = Array.from(document.querySelectorAll(".memory-card"));

cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});
