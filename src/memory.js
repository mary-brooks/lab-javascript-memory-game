class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

    this.shuffleCards();
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = this.cards.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[randomIndex]] = [
        this.cards[randomIndex],
        this.cards[i],
      ];
    }

    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    const totalPairs = this.cards.length / 2;

    if (this.pairsGuessed === totalPairs) {
      return true;
    } else {
      return false;
    }
  }
}
