'use strict';

function validateDecks(deckA, deckB) {
  var matches = true;
  deckB.forEach(function(val) {
    if (deckA.indexOf(val) === -1) {
      matches = false;
    }
  });

  return matches;
}

var gamblerFactory = require('./index.js');

var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var gambler = gamblerFactory(deck);

gambler.shuffleDeck();


if (!validateDecks(deck, gambler.deck)) {
  console.log('Decks do not contain the same elements!');
  process.exit(1);
}

console.log('shuffled deck => ', gambler.deck);
console.log('drawn card => ', gambler.drawCard());
console.log('drawn card index => ', gambler.cardIndex);

console.log('Changing decks ...');

deck = ['foo', 'bar', 'baz', 'foobar'];
if (validateDecks(deck, gambler.deck)) {
  console.log('Decks have the same elements!')
  process.exit(1);
}

gambler.deck = deck;
if (gambler.cardIndex !== -1) {
  console.log('Drawn card index did not get reset!');
  process.exit(1);
}

gambler.shuffleDeck();
console.log('shuffled deck => ', gambler.deck);
console.log('drawn card => ', gambler.drawCard());
console.log('drawn card index => ', gambler.cardIndex);