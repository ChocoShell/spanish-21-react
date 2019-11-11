# Blog Notes

After a weekend at Atlantic City(Link to AC?), I wanted to make my own Spanish 21 game to figure out the optimal strategy through ML.  I first wanted to make the backend in Scala so I cna learn more about it and it makes it easier to do ML stuff there.  Then I thought of doing it in python since I know python more and I can do the front end and back end easier. Then I realized I can have the whole thing on the front end in React, then maybe create a version where I move it to ndoe in the backend and do ML on it in the form of Tensorflow.js(Link to tensorflow).

Writing this blog as a way to gather my thoughts so this page will change dramatically whenever it updates.

I started building out the larger parts of what I remember form the game: the shoe(Link to Shoe container) containing 8 casino decks with no 10's(deck utils link), the dealer, the players[Right now I am sticking with the max of 6 and I will add or rmeove some], and cards.

For the deck, I reused a lot of code from(insert link from software dude) and added the ability to shuffle multiple decks.

I generated all possible cards and saved them to a json file so I only have to pass the id of each card where the id is just the index of the card.

My "deck" then ends up being an array of numbers 0 to 47.

I did have the ability to deal cards to players but with the state refactor, it needs to be remade.

I am using the container pattern (https://www.freecodecamp.org/news/react-superpowers-container-pattern-20d664bdae65/) since this is what I remember using last time from work a year or so ago.

I built each component with a container encapsulating the more complex logic and the stateless component that is for the visuals(html and css).

I added a different color border to all the components so I can keep track of them.

(Picture of components with border)

I have all my state in the root level, pulling it out of the child components.  I ran into issues updating the players state since it is so deeply nested.

    dealCardToPlayer(playerId){
      const players = [...this.state.players];
      players[playerId] = {
        ...players[playerId],
        cards: [
          ...players[playerId].cards,
          this.getCardFromShoe()
        ]
      }
      this.setState({players});
    }

This is how I tried updating the state but it didn't seem to work.

My friend suggested lodash's deepcopy(link to lodash deep copy docs) or hooks(link to hooks) and I decided hooks was the "right" way to do it and I would learn something new.

I moved on to try with useReducer. Unfortunately, the example on facebook was sparse and it only worked within one file.

So I found this example and followed that.

https://github.com/andersontr15/react-hooks-useReducer/blob/master/src/Dashboard.js

I moved all the state and reducer logic to App.js instead of Spanish21.js, I may move it back.

Currently, writing a reducer to give a card to a player, I could use the code above and try that but I was thinking there may be a more elegant solution that I am not seeing or haven't learned yet.
