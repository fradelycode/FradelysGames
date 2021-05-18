function setUp() {
  let player = {
    name: "fradely",
    chip: 150,
  };
  let cards = [];
  let sum = 0;
  let hasBlackJack = false;
  let isAlive = false;
  let message = "";

  let messageEl = document.getElementById("message-el");
  let sumEl = document.querySelector("#sum-el");
  let cardsEl = document.querySelector("#cards-el");

  let playerEl = document.getElementById("player-el");
  playerEl.textContent = player.name + ": $" + player.chip;

  function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 14);

    if (randomNumber > 10) {
      return 10;
    } else if (randomNumber == 1) {
      return 11;
    } else {
      return randomNumber;
    }
  }

  document.getElementById("start-btn").addEventListener("click", function () {
    function startGame() {
      isAlive = true;
      let firstCard = getRandomCard();
      let secondCard = getRandomCard();
      cards = [firstCard, secondCard];
      sum = firstCard + secondCard;

      renderGame();
    }
    startGame();
    function renderGame() {
      cardsEl.textContent = "Cards: ";
      for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
      }

      sumEl.textContent = "Sum: " + sum;
      if (sum <= 20) {
        message = "Do you want to draw a new card?";
      } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
      } else {
        message = "You're out of the game!";
        isAlive = false;
      }

      messageEl.textContent = message;
    }

    document.querySelector("#new-card").addEventListener("click", function () {
      if (isAlive === true && hasBlackJack === false) {
        function newCard() {
          let card = getRandomCard();
          sum += card;
          cards.push(card);
          console.log(cards);
          renderGame();
        }
      }

      newCard();
    });
  });
}

window.onload = function () {
  setUp();
};
