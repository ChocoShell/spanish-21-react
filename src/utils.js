// card utils

class Shoe {
  constructor(numOfDecks)
  {
    this.numOfDecks = numOfDecks
    this.deck = getDeck()
    for(var i = 1; i < numOfDecks; i++)
      this.deck = this.deck.concat(getDeck())
  }

  shuffle()
  {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < (this.numOfDecks*1000); i++)
    {
      var location1 = Math.floor((Math.random() * this.deck.length));
      var location2 = Math.floor((Math.random() * this.deck.length));
      var tmp = this.deck[location1];

      this.deck[location1] = this.deck[location2];
      this.deck[location2] = tmp;
    }
  }
}

function getDeck()
//https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
{
  var deck = new Array();
  var suits = ["spades", "diamonds", "clubs", "hearts"];
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  for(var i = 0; i < suits.length; i++)
  {
    for(var x = 0; x < values.length; x++)
    {
      var card = {Value: values[x], Suit: suits[i]};
      deck.push(card);
    }
  }

  return deck;
}

// Turn into component
export function renderDeck()
{
  document.getElementById("deck").innerHTML = "";

  for(let i = 0; i < deck.length; i++)
  {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + deck[i].Suit;

    value.innerHTML = deck[i].Value;
    card.appendChild(value);
    card.appendChild(suit);

    document.getElementById("deck").appendChild(card);
  }
}
