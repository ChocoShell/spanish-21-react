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

e1581f829f6ee0d9df6b240de57c069eb4e88f23

I moved on to try with useReducer. Unfortunately, the example on facebook was sparse and it only worked within one file.

So I found this example and followed that.

https://github.com/andersontr15/react-hooks-useReducer/blob/master/src/Dashboard.js

I moved all the state and reducer logic to App.js instead of Spanish21.js, I may move it back.

Currently, writing a reducer to give a card to a player, I could use the code above and try that but I was thinking there may be a more elegant solution that I am not seeing or haven't learned yet.
so, I062568

The cards with no set width game me weird expanded cards so for now they are a set length.

I've been using flexbox and ran into some issues with it being too flexible.
The player components kept chaning size when it replaced the Hit button with the busted message.  I tried flex-grow: 1 but it still moved around the boxes a bit.
I opted for setting the width to 100/6 = \~16%.

Flexbox did make it easy to do vertical columns as well as move my two player header elements [player total and hit button] to opposite sides of the parent element with `justify-content: space-between`

-----
I was wondering whether or not my root context should be passed to all child and child-child nodes. That's when zain told me about multiple contexts.  I didn't see it mentioned in the react hooks guide but found it here. https://reactjs.org/docs/context.html#consuming-multiple-contexts

I still wasn't understanding contexts completely, I assumed they were exactly the same as redux but it is like small encapsulated redux states.

After conferring with another developer(ek), we came to the conclusion that useReducer was too complex for my use case right now and I should see how far the Context API would get me.
https://reactjs.org/docs/context.html#contextprovider

I am considering component composition (where I just pass the component down with the props already initialized) but I do not want to limit myself at this time.  The main difference is that Context allows the entire tree access to the data while the component composition method will only allow the premade component to access the data which is in its props.

I decided to put all of my state in one context and split it up as needed.

I had to change my Spanish21 component back into a stateful component to use context.

I was able to wrap my Spanish21 Component in the RootContext and am able to read the initial state data but not able to alter it when I want to deal cards.

bf14abdc11952d6cae692a4db6b12d7038839017

-------

I want to be able to alter my context data, so I'll be using a dynamic context and add some base functions. [Link to root-context]

Used old reducer code to recreate the state modifying functions: dealCard and dealCardToPlayer.

Looks pretty messy and nested. I want to try to move the shoe state lower.

I also rearranged the shuffler logic so we start out with empty decks.

Note to self: A changelog would be good.

8b8d22ccee3f4e190660de5b77230b1b0cd6eafd

------

So, I'm back to where I was a few commits ago.  The code is messy but it should make adding more code easier.

Going to add a changelog with the versions instead.

I want to add a betting system but that seems a bit difficult right now so I will create an active player flag which will only allow one person at a time to hit.

I created a setActivePlayer function and wanted to pass a slightly complex function in Spanish21 to the nextPlayer prop of the dealer(where I decided the button would live for now) but realized I couldn't define the function outside of the Context.Consumer so I created another function in App.js called setNextPlayer which will call the setActivePlayer function with the next correct value. (currentActivePlayer + 1 % length of players)

Each player has an active attribute but it is not being used right now. I passed it down from the PlayerContainer file and then it worked.  It's a little clunky and I want this to be automatic so I think I will do that next.  I also want to set the CSS to tell me which player is active.

I should also add a casino table green felt background.

d513ddefd0da7cfc0ab6c027c438090323521d34

----

Note: Make sure to release a branch or tag with each Changelog update and use the sem verisoning.

I want to have the ability to deal the first cards of a round.

I'll tie it to a button in the dealer component for now and try to reuse some commented code from Spanish21.

[Link to new dealer code here]

We'll define the dealRound function in App.js just like all the others.

It's starting to get pretty long and disjointed so we should think about refactoring. Maybe create a dealCard to Active Player function and swap through all players when dealing cards?

We were able to reuse dealCardToPlayer, resetRound and dealRound largely unchanged! I forgot to add it to dealerContainer so debugging that took me a minute.  Still not sure of the benefits of this container pattern.

I added the shoe resetting code from dealCard to dealCardToPlayer so it works with empty shoes.

ec035249679bdca754450a8a3b7c08a363129f28

---

This time, going to just handle some repo hygiene.

- Setting up Changelog.md
- Setting up version file
- Setting up release branch for this version.

Hopefully, going forward it will look more clean.  Ideally, I can use my notes to back and go through the commits and label other versions.
