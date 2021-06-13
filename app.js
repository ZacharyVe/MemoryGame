document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "ape",
      img: "images/ape.png",
    },
    {
      name: "ape",
      img: "images/ape.png",
    },
    {
      name: "bird",
      img: "images/bird.png",
    },
    {
      name: "bird",
      img: "images/bird.png",
    },
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "cat",
      img: "images/cat.png",
    },
    {
      name: "porc",
      img: "images/porc.png",
    },
    {
      name: "porc",
      img: "images/porc.png",
    },
    {
      name: "snek",
      img: "images/snek.png",
    },
    {
      name: "snek",
      img: "images/snek.png",
    },
    {
      name: "woof",
      img: "images/woof.png",
    },
    {
      name: "woof",
      img: "images/woof.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/guess.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check match
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/match.png");
      cards[optionTwoId].setAttribute("src", "images/match.png");
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/guess.png");
      cards[optionTwoId].setAttribute("src", "images/guess.png");
      alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
