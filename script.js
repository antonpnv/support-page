document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel__track');
  const cards = Array.from(track.children);
  const nextButton = document.querySelector('.carousel__button');

  let currentIndex = 0;
  let visibleCards = getVisibleCards();

  function getCardWidth() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    return cardWidth + gap;
  }

  function getVisibleCards() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 1199) return 2;
    return 4;
  }

  function updateSlidePosition() {
    const cardWidth = getCardWidth();
    visibleCards = getVisibleCards();

    const amountToMove = -cardWidth * currentIndex;
    track.style.transform = `translateX(${amountToMove}px)`;
  }

  nextButton.addEventListener('click', () => {
    if (currentIndex + visibleCards < cards.length) {
      currentIndex += visibleCards;
    } else {
      currentIndex = 0;
    }

    updateSlidePosition();
  });

  window.addEventListener('resize', () => {
    updateSlidePosition();
  });
});
