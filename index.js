'use strict';

var sjcl = require('sjcl');
var random = sjcl.random;

/**
 * Retrieve an instance of Gambler.
 *
 * @param {Array|null} deck A deck to initialize the Gambler with (null for empty deck)
 * @returns {gambler.Gambler}
 */
function gambler(deck) {
  /**
   * An simple interface for shuffling a deck of cards and drawing cards from
   * that deck.
   *
   * @returns {gambler.Gambler}
   * @constructor
   */
  function Gambler() {
    if (!(this instanceof Gambler)) {
      return new Gambler();
    }
  }

  function copyArray(ar) {
    return Array.prototype.map.call(ar, function(x) { return x; });
  }

  if (deck && !deck instanceof Array) {
    throw new Error('Deck must be an instance of Array');
  }

  var _deck = (deck) ? copyArray(deck) : [];
  var _cardIndex = -1;
  Gambler.prototype = {
    /**
     * The deck of cards that Gambler is working with. If {@link #shuffleDeck}
     * has been invoked, then the returned deck is the shuffled deck.
     *
     * @returns {array}
     */
    get deck() {
      return (_deck) ? _deck : [];
    },
    /**
     * Set a deck of cards for Gambler to work with. This does a deep copy of
     * the passed in array so that Gambler has its own instance to mangle.
     *
     * @param {array} deck
     */
    set deck(deck) {
      if (! deck instanceof Array) {
        throw new Error('Deck must be an instance of Array');
      }
      _deck = copyArray(deck);
      _cardIndex = -1;
    },

    /**
     * The random number that was chosen as the card to return from the deck.
     * In other words, the array index of the chosen card from the deck. If
     * a card has not been drawn, the result is -1.
     *
     * @returns {number}
     */
    get cardIndex() {
      return _cardIndex;
    }
  };

  /**
   * Shuffle the associated deck.
   */
  Gambler.prototype.shuffleDeck = function shuffleDeck() {
    // http://en.wikipedia.org/wiki/Fisher–Yates_shuffle
    var j = 0;
    var array_i, array_j;

    var i = _deck.length - 1;
    while (i > 0) {
      j = Math.abs(random.randomWords(1)) % i;
      array_i = _deck[i];
      array_j = _deck[j];

      _deck[j] = array_i;
      _deck[i] = array_j;

      i -= 1;
    }
  };

  /**
   * Draws a random card from the deck and returns it. Note: this does not
   * remove the card from the deck. It simply returns the value of the card.
   *
   * @returns {*}
   */
  Gambler.prototype.drawCard = function drawCard() {
    _cardIndex = Math.abs(random.randomWords(1)) % _deck.length;
    return _deck[_cardIndex];
  };

  return new Gambler();
}

exports = module.exports = gambler;