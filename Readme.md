# Gambler

Gambler is a simple module for shuffling a "deck of cards" and choosing a random card within that deck, where a "deck" is an array of objects. The deck can be an array of any type objects, Gambler doesn't care. Gambler does not modify the deck given to it. Instead, it makes a deep copy and operates on that deck.

Gambler uses the [Knuth Shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle) when shuffling cards. When picking a card, it uses the [SJCL](http://bitwiseshiftleft.github.io/sjcl/) prng class to pick the card.

## Install

```bash
npm install --save gambler
```

## Example

```javascript
var gamblerFactory = require('gambler');
var deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var gambler = gamblerFactory(deck);

gambler.shuffleDeck();

console.log('shuffled deck => ', gambler.deck);
console.log('drawn card => ', gambler.drawCard());
console.log('drawn card index => ', gambler.cardIndex);
// shuffled deck =>  [ 10, 5, 7, 6, 3, 2, 1, 4, 8, 9 ]
// drawn card =>  9
// drawn card index =>  9

// And then reusing the same gambler
deck = ['foo', 'bar', 'baz', 'foobar'];
gambler.deck = deck;
gambler.shuffleDeck();
console.log('shuffled deck => ', gambler.deck);
console.log('drawn card => ', gambler.drawCard());
console.log('drawn card index => ', gambler.cardIndex);
//shuffled deck =>  [ 'foobar', 'baz', 'foo', 'bar' ]
//drawn card =>  baz
//drawn card index =>  1
```

# License

[http://jsumners.mit-license.org](http://jsumners.mit-license.org/)

THE MIT LICENSE (MIT) Copyright © 2014 James Sumners james.sumners@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.