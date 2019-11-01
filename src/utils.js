// card utils
export function shuffle(deck)
{
  // for 1000 turns for each deck
  // switch the values of two random cards
  const numOfDecks = Math.round(deck.length/52);
  for (var i = 0; i < (numOfDecks*1000); i++)
  {
    var location1 = Math.floor((Math.random() * deck.length));
    var location2 = Math.floor((Math.random() * deck.length));
    var tmp = deck[location1];

    deck[location1] = deck[location2];
    deck[location2] = tmp;
  }
  return deck
}



export function getDecks(numOfDecks)
//https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
{
  var deck = [];
  var suits = ["spades", "diamonds", "clubs", "hearts"];
  // Spanish 21 doesn't use 10's
  var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  for (var d = 0; d < numOfDecks; d++)
  {
    for(var i = 0; i < suits.length; i++)
    {
      for(var x = 0; x < values.length; x++)
      {
        var card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
      }
    }
  }

  return deck;
}




// Turn into component
// export function renderDeck()
// {
//   document.getElementById("deck").innerHTML = "";

//   for(let i = 0; i < deck.length; i++)
//   {
//     let card = document.createElement("div");
//     let value = document.createElement("div");
//     let suit = document.createElement("div");
//     card.className = "card";
//     value.className = "value";
//     suit.className = "suit " + deck[i].Suit;

//     value.innerHTML = deck[i].Value;
//     card.appendChild(value);
//     card.appendChild(suit);

//     document.getElementById("deck").appendChild(card);
//   }
// }
