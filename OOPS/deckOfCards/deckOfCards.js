/******************************************************************************
 *  Execution       :   1. default node          : cmd> node deckOfCards.js
 *                      
 *
 *  purpose         : To initialize a deck of cards.
 *
 *  @description    : shuffle the deck and provide 9 cards each to 4 players.
 *
 *  @file           : deckOfCards.js
 *  @author         : Akshay K C <akshaykc27@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-03-2019
 *
 ******************************************************************************/

var util = require('../utility/utility');
function deckOfCards() {

    util.distributingCards();
}

deckOfCards()