const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
];

const memoryGame = new MemoryGame(cards);

const pairsClicked = document.getElementById('pairs-clicked');
const pairsGuessed = document.getElementById('pairs-guessed');
const pageTitle = document.querySelector('h1');

window.addEventListener('load', event => {
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('turned');
      memoryGame.pickedCards.push(card);

      if (memoryGame.pickedCards.length === 2) {
        firstCard = memoryGame.pickedCards[0].getAttribute('data-card-name');
        secondCard = memoryGame.pickedCards[1].getAttribute('data-card-name');

        if (memoryGame.checkIfPair(firstCard, secondCard)) {
          memoryGame.pickedCards.forEach(pickedCard => {
            pickedCard.classList.toggle('guessed');
          });

          memoryGame.pickedCards.length = 0;
          pairsClicked.innerHTML = memoryGame.pairsClicked;
          pairsGuessed.innerHTML = memoryGame.pairsGuessed;
        } else {
          setTimeout(() => {
            memoryGame.pickedCards.forEach(pickedCard => {
              pickedCard.classList.toggle('turned');
            });
            memoryGame.pickedCards.length = 0;
            pairsClicked.innerHTML = memoryGame.pairsClicked;
          }, 1000);
        }

        if (memoryGame.checkIfFinished()) {
          pageTitle.innerText = `Congratulations, you found all ${memoryGame.pairsGuessed} pairs in ${memoryGame.pairsClicked} guesses!`;
        }
      }
    });
  });
});
