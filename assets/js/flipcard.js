// Найдите все карточки
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
      const cardInner = card.querySelector('.flip-card-inner');
      // Переключите класс, чтобы перевернуть карточку
      cardInner.classList.toggle('flipped');
    });
  });
  