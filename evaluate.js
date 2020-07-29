/**************************************************************************************************/
//Generate a random hand of 5 cards and return the hand and its poker value in array [hand, handValue]
//e.g.  [['Ks','Ac','5d','Kd','Ah'], "Two Pairs"]
/**************************************************************************************************/

var currentHand = ['', '', '', '', ''];
var holdArray = [0, 0, 0, 0, 0];

function generate() {

    //console.log(currentHand)
    //console.log(holdArray)

    //Construct array of the removed card
    var removedCards = []
    for (var cardCounter = 0; cardCounter < currentHand.length; cardCounter++){
        if (holdArray[cardCounter] == 1) {
            removedCards.push(currentHand[cardCounter])
        }
    }
    //console.log(removedCards)


    /****************************** Generate a random hand of 5 cards **********************************/
    //Standard deck of 52 cards in array
    var deck = ['Ac', 'Kc', 'Qc', 'Jc', 'Tc', '9c', '8c', '7c', '6c', '5c', '4c', '3c', '2c', 'Ad', 'Kd', 'Qd', 'Jd', 'Td', '9d', '8d', '7d', '6d', '5d', '4d', '3d', '2d', 'Ah', 'Kh', 'Qh', 'Jh', 'Th', '9h', '8h', '7h', '6h', '5h', '4h', '3h', '2h', 'As', 'Ks', 'Qs', 'Js', 'Ts', '9s', '8s', '7s', '6s', '5s', '4s', '3s', '2s'];

    //Removed the held cards from deck
    for (card of deck){
        if (removedCards.includes(card)){
            //console.log(card)
            deck.splice(deck.indexOf(card),1)
        }
    }

    //console.log(deck)

    var ranNumOne = Math.floor(Math.random() * deck.length); //random # between 0 -> 51 inclusive
    if (currentHand[0] != "" && holdArray[0] == 1) { //
        var cardOne = currentHand[0];
        deck.splice(deck.indexOf(currentHand[0]), 1);
        //console.log(deck)
    }
    else {
        var cardOne = deck[ranNumOne]; //First random card
        deck.splice(ranNumOne, 1); //Remove deck[ranNumOne] from deck
    }
    //console.log("cardOne =", cardOne)
    
    //console.log(deck)

    var ranNumTwo = Math.floor(Math.random() * deck.length); //random # between 0 -> 50 inclusive
    if (currentHand[1] != "" && holdArray[1] == 1) { //
        var cardTwo = currentHand[1];
        deck.splice(deck.indexOf(currentHand[1]), 1);
    }
    else {
        var cardTwo = deck[ranNumTwo]; //Second random card
        deck.splice(ranNumTwo, 1); //Remove deck[ranNumTwo] from deck
    }
    ////console.log("cardTwo =", cardTwo)

    //console.log(deck)

    var ranNumThree = Math.floor(Math.random() * deck.length); //random # between 0 -> 49 inclusive
    if (currentHand[2] != "" && holdArray[2] == 1) { //
        var cardThree = currentHand[2];
        deck.splice(deck.indexOf(currentHand[2]), 1);
    }
    else {
        var cardThree = deck[ranNumThree]; //Third random card
        deck.splice(ranNumThree, 1); //Remove deck[ranNumThree] from deck
    }

    //console.log(deck)

    var ranNumFour = Math.floor(Math.random() * deck.length); //random # between 0 -> 48 inclusive
    if (currentHand[3] != "" && holdArray[3] == 1) { //
        var cardFour = currentHand[3];
        deck.splice(deck.indexOf(currentHand[3]), 1);
    }
    else {
        var cardFour = deck[ranNumFour]; //Fourth random card
        deck.splice(ranNumFour, 1); //Remove deck[ranNranNumFourumOne] from deck
    }

    //console.log(deck)

    var ranNumFive = Math.floor(Math.random() * deck.length); //random # between 0 -> 47 inclusive
    if (currentHand[4] != "" && holdArray[4] == 1) { //
        var cardFive = currentHand[4];
        deck.splice(deck.indexOf(currentHand[4]), 1);
    }
    else {
        var cardFive = deck[ranNumFive]; //Fifth random card
        deck.splice(ranNumFive, 1); //Remove deck[ranNumFive] from deck
    }

    //console.log(deck)

    var hand = [cardOne, cardTwo, cardThree, cardFour, cardFive]; //Array containings 5 random cards, e.g. ['Ac','2s','Kh','Qh','2d']

    var rankOne = cardOne[0]; //First card of hand without suit, e.g. 'A'
    var suitOne = cardOne[1]; //Suit of first card of hand, e.g. 'c'
    var rankTwo = cardTwo[0];
    var suitTwo = cardTwo[1];
    var rankThree = cardThree[0];
    var suitThree = cardThree[1];
    var rankFour = cardFour[0];
    var suitFour = cardFour[1];
    var rankFive = cardFive[0];
    var suitFive = cardFive[1];

    var handNoSuit = rankOne + rankTwo + rankThree + rankFour + rankFive; //String of hand without suits, e.g. 'A2KQ2'
    var suits = suitOne + suitTwo + suitThree + suitFour + suitFive; //Suits of hand without card values, e.g. 'cshhd'

    var handNoSuitArray = [cardOne[0], cardTwo[0], cardThree[0], cardFour[0], cardFive[0]]; //Array of cards in a hand without suits
    /**************************************************************************************************/

    currentHand = ['', '', '', '', ''];
    holdArray = [0, 0, 0, 0, 0]

    return [hand, handNoSuit, suits, handNoSuitArray];
}

function evaluate() {

    var [hand, handNoSuit, suits, handNoSuitArray] = generate();

    var handValue = ""; //Value of hand to be evaluated

    /************** Preprocessing for Royal, Straight Flush, Flush & Straight *************************/
    var standardDeck = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2']; //Ordered standard deck of cards without suits

    var key = { 'A': 0, 'K': 1, 'Q': 2, 'J': 3, 'T': 4, '9': 5, '8': 6, '7': 7, '6': 8, '5': 9, '4': 10, '3': 11, '2': 12, }; //Ojbect of card ranks with associated value
    var inverseKey = { 0: 'A', 1: 'K', 2: 'Q', 3: 'J', 4: 'T', 5: '9', 6: '8', 7: '7', 8: '6', 9: '5', 10: '4', 11: '3', 12: '2' }; //Inverse key <--> value of key

    var handNoSuitKey = []; //Array representing handNoSuitArray as integers from 0 to 12 according to key, e.g. K -> 1, 8-> 6

    for (card of handNoSuitArray) { handNoSuitKey.push(key[card]); }

    var sortedKeys = handNoSuitKey.sort(function (a, b) { return a - b }); //Sort handNoSuitKey from low to high, e.g. [9,8,12,0,2] --> [0,2,8,9,12]

    //Get ranked hand no suit by using sortedKeys as index in inverseKey
    var sortedHandNoSuit = inverseKey[sortedKeys[0]] + inverseKey[sortedKeys[1]] + inverseKey[sortedKeys[2]] + inverseKey[sortedKeys[3]] + inverseKey[sortedKeys[4]];

    //Representing straight for comparision with sortedHandNoSuit 
    var straightsArray = ['AKQJT', 'KQJT9', 'QJT98', 'JT987', 'T9876', '98765', '87654', '76543', '65432', 'A5432',]
    /**************************************************************************************************/


    /******************* Preprocessing for Quads, Boat, 3OAK, 2 Pairs & 1 Pair ***********************/
    //Count the number of repeated cards in objects, e.g. {A:2,K:2,Q:1}
    var cardCountObj = {};
    var cardGetJackorBetter = { A: 0, K: 0, Q: 0, J: 0 };
    for (card of handNoSuit) {
        if (cardCountObj[card] > 0) { cardCountObj[card] += 1; }
        else { cardCountObj[card] = 1; }

        if (card == "A" || card == "K" || card == "Q" || card == "J") { cardGetJackorBetter[card] += 1; }
    }

    //Array of numbers of repeated cards greater than 1, e.g. {A:2,K:2,Q:1} --> [2,2]
    var cardCountArray = [];
    for (i in cardCountObj) {
        if (cardCountObj[i] > 1) { cardCountArray.push(cardCountObj[i]); }
    }
    /***********************************************************************************************/


    /*********************************** Check for Straight Flush *************************************/
    //Check if sortedHandNoSuit is in straightsArray; if so, sortedHandNoSuit --> straight, else --> not straight
    if (straightsArray.includes(sortedHandNoSuit)) {
        ////console.log('STRAIGHT', sortedHandNoSuit);
        //document.getElementById("DIV").innerHTML += "STRAIGHT "+sortedHandNoSuit+"<br/>";
        if (suits[0] == suits[1] && suits[0] == suits[2] && suits[0] == suits[3] && suits[0] == suits[4]) {
            ////console.log(hand, "STRAIGHT FLUSH!!!"); 
            if (sortedHandNoSuit[0] == "A" && sortedHandNoSuit[1] == "K") { handValue = "Royal Flush"; }
            else { handValue = "Straight Flush"; }
        }
        //IMPORTANT: 7.20.20 Removing checking for straight under flush,
        //because the if else won't continue to evaluate hand if straight is checked in straightflush
        else {
            ////console.log('STRAIGHT', sortedHandNoSuit);
            handValue = "Straight";
        }
    }
    /***********************************************************************************************/


    /*********************************** Check for Quads and Boats *************************************/
    else if (cardCountArray[0] == 4) { //Check for Quads, e.g. [4] --> Quads
        ////console.log(hand, 'Quad');
        handValue = "Four of A Kind";
    }
    else if (cardCountArray[0] == 3 && cardCountArray[1] == 2 || cardCountArray[0] == 2 && cardCountArray[1] == 3) { //Check for Boat, e.g. [3,2] || [2,3] --> Boat
        ////console.log(hand, 'Boat');
        handValue = "Full House";
    }
    /***********************************************************************************************/


    /***************************** Check for Flush and Straight ************************************/
    //Check for flush. If all suits are same, then flush.
    else if (suits[0] == suits[1] && suits[0] == suits[2] && suits[0] == suits[3] && suits[0] == suits[4]) {
        ////console.log(hand, "FLUSH"); 
        handValue = "Flush";
    }

    /***********************************************************************************************/
    //Found Bug 7.20.20: Move checking for straight under straightflush because if hand is evaluated as straight under straightflush, 
    //it won't check for other type of hands.
    //Check if sortedHandNoSuit is in straightsArray; if so, sortedHandNoSuit --> straight, else --> not straight
    //else if (straightsArray.includes(sortedHandNoSuit)) {
    ////console.log('STRAIGHT', sortedHandNoSuit);
    //    handValue = "Straight" ;
    //}
    /***********************************************************************************************/


    /************** Check for 3OAK, 2 Pairs, Jacks or Better and High Cards *************************/
    else if (cardCountArray[0] == 3) { //Check for 3OAK, e.g. [3] --> 3OAK
        ////console.log('3OAK'); 
        handValue = "3 of A Kind";
    }
    else if (cardCountArray[0] == 2 && cardCountArray[1] == 2) { //Check for 2 Pairs, e.g. [2,2] --> 2Pairs
        ////console.log('2 Pairs'); 
        handValue = "Two Pairs";
    }
    else if (cardCountArray[0] == 2) { //Check for 1 Pair & Jacks or Better, e.g. [2] --> 1 Pair
        ////console.log('1 Pair',cardCountObj); 

        if (cardGetJackorBetter["A"] == 2 || cardGetJackorBetter["K"] == 2 || cardGetJackorBetter["Q"] == 2 || cardGetJackorBetter["J"] == 2) {
            ////console.log(cardGetJackorBetter, "Jacks or Better!"); 
            handValue = "Jacks or Better";
        }

        //If pair is not Jack or Better, than it's a weak pair.
        else { handValue = "Weak Pair"; }
    }
    else {
        ////console.log("High Cards");
        handValue = "High Cards";
    }
    /***********************************************************************************************/

    return [hand, handValue];

}