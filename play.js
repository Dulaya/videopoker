//Set up column color
for (element of document.getElementsByClassName("columnOne")) {
    element.style.background = "#e71414";
}


//Only update the $ bet sizing when the Bet button is clicked
function betSize() {
    if (document.getElementById("dealButton").innerHTML == "DEAL") {
        var betSizing = document.getElementById("betSize").innerHTML; //Get word value of bet sizing from button innerHTML

        //Object mapping increment when bet button is clicked
        var betSizeObj = { "BET ONE": "BET TWO", "BET TWO": "BET THREE", "BET THREE": "BET FOUR", "BET FOUR": "BET FIVE", "BET FIVE": "BET ONE", };

        //Update (increment) innerHTML of bet button according to key -> value above
        document.getElementById("betSize").innerHTML = betSizeObj[betSizing];

        var betUnit = 0.25; //Smallest betting unit

        var betSizeWord = document.getElementById("betSize").innerHTML; //Get word value of bet sizing from button innerHTML

        //Object mapping bet sizing word to numerical value
        var betSizeObj = { "BET ONE": betUnit * 1, "BET TWO": betUnit * 2, "BET THREE": betUnit * 3, "BET FOUR": betUnit * 4, "BET FIVE": betUnit * 5, }

        var betSizeNum = betSizeObj[betSizeWord].toFixed(2); //Update bet sizing numerical value after bet button clicked

        document.getElementById("betSizeOut").innerHTML = betSizeNum; //Update DOM of above

        //Clear column color
        for (element of document.getElementsByClassName("columnOne")) {
            element.style.background = "#0f4c75";
        }

        for (element of document.getElementsByClassName("columnTwo")) {
            element.style.background = "#0f4c75";
        }

        for (element of document.getElementsByClassName("columnThree")) {
            element.style.background = "#0f4c75";
        }

        for (element of document.getElementsByClassName("columnFour")) {
            element.style.background = "#0f4c75";
        }

        for (element of document.getElementsByClassName("columnFive")) {
            element.style.background = "#0f4c75";
        }

        //Apply column color on bet changing
        for (element of document.getElementsByClassName("columnOne")) {
            if (document.getElementById("betSize").innerHTML == "BET ONE") {
                element.style.background = "#e71414"
            }
        }

        for (element of document.getElementsByClassName("columnTwo")) {
            if (document.getElementById("betSize").innerHTML == "BET TWO") {
                element.style.background = "#e71414"
            }
        }

        for (element of document.getElementsByClassName("columnThree")) {
            if (document.getElementById("betSize").innerHTML == "BET THREE") {
                element.style.background = "#e71414"
            }
        }

        for (element of document.getElementsByClassName("columnFour")) {
            if (document.getElementById("betSize").innerHTML == "BET FOUR") {
                element.style.background = "#e71414"
            }
        }

        for (element of document.getElementsByClassName("columnFive")) {
            if (document.getElementById("betSize").innerHTML == "BET FIVE") {
                element.style.background = "#e71414"
            }
        }
    }
}

/*****************************************************************************/
//  Takes the outputs [hand, handValue] from evalute() and update the DOM with 
//  card values, new cards, credits and bet sizing.    
/*****************************************************************************/



function play() {

    var betUnit = 0.25; //Smallest betting unit

    var credit = Number(document.getElementById("credit").innerHTML); //Get credit on DOM

    var betSizeWord = document.getElementById("betSize").innerHTML; //Get bet size in word from DOM

    var [hand, handValue] = evaluate();


    var handString = hand[0][0] + hand[0][1] + hand[1][0] + hand[1][1] + hand[2][0] + hand[2][1] + hand[3][0] + hand[3][1] + hand[4][0] + hand[4][1];

    if (document.getElementById("credit").innerHTML > 0 && document.getElementById("dealButton").innerHTML == "DRAW") {

        //Object mapping word keys bet size to numerical value
        var betSizeObj = { "BET ONE": betUnit * 1, "BET TWO": betUnit * 2, "BET THREE": betUnit * 3, "BET FOUR": betUnit * 4, "BET FIVE": betUnit * 5, }

        var betSizeNum = betSizeObj[betSizeWord]; //Convert bet size in word into number

        //Object mapping hand values to numericla payout
        var payOutObj = {
            "High Cards": betSizeNum * 0,
            "Weak Pair": betSizeNum * 0,
            "Jacks or Better": betSizeNum * 1,
            "Two Pairs": betSizeNum * 2,
            "3 of A Kind": betSizeNum * 3,
            "Straight": betSizeNum * 4,
            "Flush": betSizeNum * 6,
            "Full House": betSizeNum * 9,
            "Four of A Kind": betSizeNum * 25,
            "Straight Flush": betSizeNum * 50,
            "Royal Flush": betSizeNum * 250,
        }

        credit += payOutObj[handValue]; //Update credit after hand is evaluated

        document.getElementById("credit").innerHTML = credit; //Update DOM with updated credit


        //Object mapping cards characters to images
        var obj = {
            "Ac": "cards/Ace-Club.jpg",
            "Ad": "cards/Ace-Diamond.jpg",
            "Ah": "cards/Ace-Heart.jpg",
            "As": "cards/Ace-Spade.jpg",
            "Kc": "cards/King-Club.jpg",
            "Kd": "cards/King-Diamond.jpg",
            "Kh": "cards/King-Heart.jpg",
            "Ks": "cards/King-Spade.jpg",
            "Qc": "cards/Queen-Club.jpg",
            "Qd": "cards/Queen-Diamond.jpg",
            "Qh": "cards/Queen-Heart.jpg",
            "Qs": "cards/Queen-Spade.jpg",
            "Jc": "cards/Jack-Club.jpg",
            "Jd": "cards/Jack-Diamond.jpg",
            "Jh": "cards/Jack-Heart.jpg",
            "Js": "cards/Jack-Spade.jpg",
            "Tc": "cards/Ten-Club.jpg",
            "Td": "cards/Ten-Diamond.jpg",
            "Th": "cards/Ten-Heart.jpg",
            "Ts": "cards/Ten-Spade.jpg",
            "9c": "cards/Nine-Club.jpg",
            "9d": "cards/Nine-Diamond.jpg",
            "9h": "cards/Nine-Heart.jpg",
            "9s": "cards/Nine-Spade.jpg",
            "8c": "cards/Eight-Club.jpg",
            "8d": "cards/Eight-Diamond.jpg",
            "8h": "cards/Eight-Heart.jpg",
            "8s": "cards/Eight-Spade.jpg",
            "7c": "cards/Seven-Club.jpg",
            "7d": "cards/Seven-Diamond.jpg",
            "7h": "cards/Seven-Heart.jpg",
            "7s": "cards/Seven-Spade.jpg",
            "6c": "cards/Six-Club.jpg",
            "6d": "cards/Six-Diamond.jpg",
            "6h": "cards/Six-Heart.jpg",
            "6s": "cards/Six-Spade.jpg",
            "5c": "cards/Five-Club.jpg",
            "5d": "cards/Five-Diamond.jpg",
            "5h": "cards/Five-Heart.jpg",
            "5s": "cards/Five-Spade.jpg",
            "4c": "cards/Four-Club.jpg",
            "4d": "cards/Four-Diamond.jpg",
            "4h": "cards/Four-Heart.jpg",
            "4s": "cards/Four-Spade.jpg",
            "3c": "cards/Three-Club.jpg",
            "3d": "cards/Three-Diamond.jpg",
            "3h": "cards/Three-Heart.jpg",
            "3s": "cards/Three-Spade.jpg",
            "2c": "cards/Two-Club.jpg",
            "2d": "cards/Two-Diamond.jpg",
            "2h": "cards/Two-Heart.jpg",
            "2s": "cards/Two-Spade.jpg",
        };

        //Update DOM with new cards; if HOLD, don't change else change cards
        if (document.getElementById("cardOneHold").innerHTML != "HOLD") {
            document.getElementById("cardOne").src = obj[hand[0]];
        }

        if (document.getElementById("cardTwoHold").innerHTML != "HOLD") {
            document.getElementById("cardTwo").src = obj[hand[1]];
        }

        if (document.getElementById("cardThreeHold").innerHTML != "HOLD") {
            document.getElementById("cardThree").src = obj[hand[2]];
        }

        if (document.getElementById("cardFourHold").innerHTML != "HOLD") {
            document.getElementById("cardFour").src = obj[hand[3]];
        }

        if (document.getElementById("cardFiveHold").innerHTML != "HOLD") {
            document.getElementById("cardFive").src = obj[hand[4]];
        }




        document.getElementById("handValue").innerHTML = handValue.toUpperCase() + "</br>"; //Output hand value to DOM
        document.getElementById("handString").innerHTML = handString + "</br>"; //Output handString to DOM

        /********************************** Remove All Holds ************************************/
        document.getElementById("cardOneHold").innerHTML = "";
        document.getElementById("cardTwoHold").innerHTML = "";
        document.getElementById("cardThreeHold").innerHTML = "";
        document.getElementById("cardFourHold").innerHTML = "";
        document.getElementById("cardFiveHold").innerHTML = "";
        /****************************************************************************************/
    }


    /**SEPARATOR */


    //Only allow DEALing if credit is positive & deal button = DEAL
    if (document.getElementById("credit").innerHTML > 0 && document.getElementById("dealButton").innerHTML == "DEAL") {

        currentHand = hand;




        //Object mapping word keys bet size to numerical value
        var betSizeObj = { "BET ONE": betUnit * 1, "BET TWO": betUnit * 2, "BET THREE": betUnit * 3, "BET FOUR": betUnit * 4, "BET FIVE": betUnit * 5, }

        var betSizeNum = betSizeObj[betSizeWord]; //Convert bet size in word into number

        //var credit = Number(document.getElementById("credit").innerHTML); //Get credit on DOM

        credit += 0 - betSizeNum; //Update credit after hand is evaluated

        document.getElementById("credit").innerHTML = credit; //Update DOM with updated credit


        //Object mapping cards characters to images
        var obj = {
            "Ac": "cards/Ace-Club.jpg",
            "Ad": "cards/Ace-Diamond.jpg",
            "Ah": "cards/Ace-Heart.jpg",
            "As": "cards/Ace-Spade.jpg",
            "Kc": "cards/King-Club.jpg",
            "Kd": "cards/King-Diamond.jpg",
            "Kh": "cards/King-Heart.jpg",
            "Ks": "cards/King-Spade.jpg",
            "Qc": "cards/Queen-Club.jpg",
            "Qd": "cards/Queen-Diamond.jpg",
            "Qh": "cards/Queen-Heart.jpg",
            "Qs": "cards/Queen-Spade.jpg",
            "Jc": "cards/Jack-Club.jpg",
            "Jd": "cards/Jack-Diamond.jpg",
            "Jh": "cards/Jack-Heart.jpg",
            "Js": "cards/Jack-Spade.jpg",
            "Tc": "cards/Ten-Club.jpg",
            "Td": "cards/Ten-Diamond.jpg",
            "Th": "cards/Ten-Heart.jpg",
            "Ts": "cards/Ten-Spade.jpg",
            "9c": "cards/Nine-Club.jpg",
            "9d": "cards/Nine-Diamond.jpg",
            "9h": "cards/Nine-Heart.jpg",
            "9s": "cards/Nine-Spade.jpg",
            "8c": "cards/Eight-Club.jpg",
            "8d": "cards/Eight-Diamond.jpg",
            "8h": "cards/Eight-Heart.jpg",
            "8s": "cards/Eight-Spade.jpg",
            "7c": "cards/Seven-Club.jpg",
            "7d": "cards/Seven-Diamond.jpg",
            "7h": "cards/Seven-Heart.jpg",
            "7s": "cards/Seven-Spade.jpg",
            "6c": "cards/Six-Club.jpg",
            "6d": "cards/Six-Diamond.jpg",
            "6h": "cards/Six-Heart.jpg",
            "6s": "cards/Six-Spade.jpg",
            "5c": "cards/Five-Club.jpg",
            "5d": "cards/Five-Diamond.jpg",
            "5h": "cards/Five-Heart.jpg",
            "5s": "cards/Five-Spade.jpg",
            "4c": "cards/Four-Club.jpg",
            "4d": "cards/Four-Diamond.jpg",
            "4h": "cards/Four-Heart.jpg",
            "4s": "cards/Four-Spade.jpg",
            "3c": "cards/Three-Club.jpg",
            "3d": "cards/Three-Diamond.jpg",
            "3h": "cards/Three-Heart.jpg",
            "3s": "cards/Three-Spade.jpg",
            "2c": "cards/Two-Club.jpg",
            "2d": "cards/Two-Diamond.jpg",
            "2h": "cards/Two-Heart.jpg",
            "2s": "cards/Two-Spade.jpg",
        };

        //Update DOM with new cards; if HOLD, don't change else change cards
        if (document.getElementById("cardOneHold").innerHTML != "HOLD") {
            document.getElementById("cardOne").src = obj[hand[0]];
        }
        if (document.getElementById("cardTwoHold").innerHTML != "HOLD") {
            document.getElementById("cardTwo").src = obj[hand[1]];
        }
        if (document.getElementById("cardThreeHold").innerHTML != "HOLD") {
            document.getElementById("cardThree").src = obj[hand[2]];
        }
        if (document.getElementById("cardFourHold").innerHTML != "HOLD") {
            document.getElementById("cardFour").src = obj[hand[3]];
        }
        if (document.getElementById("cardFiveHold").innerHTML != "HOLD") {
            document.getElementById("cardFive").src = obj[hand[4]];
        }

        document.getElementById("handValue").innerHTML = handValue.toUpperCase() + "</br>"; //Output hand value to DOM
        document.getElementById("handString").innerHTML = handString + "</br>"; //Output handString to DOM

        /********************************** Remove All Holds ************************************/
        document.getElementById("cardOneHold").innerHTML = "";
        document.getElementById("cardTwoHold").innerHTML = "";
        document.getElementById("cardThreeHold").innerHTML = "";
        document.getElementById("cardFourHold").innerHTML = "";
        document.getElementById("cardFiveHold").innerHTML = "";
        /****************************************************************************************/
    }


    /*************************************** Clear CSS ********************************/
    var payTableBackgroundColor = "#0f4c75";
    var madeHandBackgroundColor = "red";

    document.getElementById("royalFlush").style.background = payTableBackgroundColor;
    document.getElementById("straightFlush").style.background = payTableBackgroundColor;
    document.getElementById("4Oak").style.background = payTableBackgroundColor;
    document.getElementById("boat").style.background = payTableBackgroundColor;
    document.getElementById("flush").style.background = payTableBackgroundColor;
    document.getElementById("straight").style.background = payTableBackgroundColor;
    document.getElementById("3Oak").style.background = payTableBackgroundColor;
    document.getElementById("2Pairs").style.background = payTableBackgroundColor;
    document.getElementById("jacksOrBetter").style.background = payTableBackgroundColor;
    /**********************************************************************************/


    /******************* Apply CSS to Pay Table According to Made Hand ****************/
    if (handValue == "Royal Flush") { document.getElementById("royalFlush").style.background = madeHandBackgroundColor; }
    if (handValue == "Straight Flush") { document.getElementById("straightFlush").style.background = madeHandBackgroundColor; }
    if (handValue == "Four of A Kind") { document.getElementById("4Oak").style.background = madeHandBackgroundColor; }
    if (handValue == "Full House") { document.getElementById("boat").style.background = madeHandBackgroundColor; }
    if (handValue == "Flush") { document.getElementById("flush").style.background = madeHandBackgroundColor; }
    if (handValue == "Straight") { document.getElementById("straight").style.background = madeHandBackgroundColor; }
    if (handValue == "3 of A Kind") { document.getElementById("3Oak").style.background = madeHandBackgroundColor; }
    if (handValue == "Two Pairs") { document.getElementById("2Pairs").style.background = madeHandBackgroundColor; }
    if (handValue == "Jacks or Better") { document.getElementById("jacksOrBetter").style.background = madeHandBackgroundColor; }
    /**********************************************************************************/


    //Toggle DEAL/DRAW button
    dealDraw();
}

//Toggle HOLD to card one & only allow during DRAWING
function cardOneHold() {
    if (document.getElementById("dealButton").innerHTML == "DRAW") {
        if (document.getElementById("cardOneHold").innerHTML == "") {
            document.getElementById("cardOneHold").innerHTML = "HOLD";
            holdArray[0] = 1;
            //console.log(holdArray)
        }
        else {
            document.getElementById("cardOneHold").innerHTML = "";
            holdArray[0] = 0;
            //console.log(holdArray)
        }
    }
}

//Toggle HOLD to card one & only allow during DRAWING
function cardTwoHold() {
    if (document.getElementById("dealButton").innerHTML == "DRAW") {
        if (document.getElementById("cardTwoHold").innerHTML == "") {
            document.getElementById("cardTwoHold").innerHTML = "HOLD";
            holdArray[1] = 1;
        }
        else {
            document.getElementById("cardTwoHold").innerHTML = "";
            holdArray[1] = 0;
        }
    }
}

//Toggle HOLD to card one & only allow during DRAWING
function cardThreeHold() {
    if (document.getElementById("dealButton").innerHTML == "DRAW") {
        if (document.getElementById("cardThreeHold").innerHTML == "") {
            document.getElementById("cardThreeHold").innerHTML = "HOLD";
            holdArray[2] = 1;
        }
        else {
            document.getElementById("cardThreeHold").innerHTML = "";
            holdArray[2] = 0;
        }
    }
}

//Toggle HOLD to card one & only allow during DRAWING
function cardFourHold() {
    if (document.getElementById("dealButton").innerHTML == "DRAW") {
        if (document.getElementById("cardFourHold").innerHTML == "") {
            document.getElementById("cardFourHold").innerHTML = "HOLD";
            holdArray[3] = 1;
        }
        else {
            document.getElementById("cardFourHold").innerHTML = "";
            holdArray[3] = 0;
        }
    }
}

//Toggle HOLD to card one & only allow during DRAWING
function cardFiveHold() {
    if (document.getElementById("dealButton").innerHTML == "DRAW") {
        if (document.getElementById("cardFiveHold").innerHTML == "") {
            document.getElementById("cardFiveHold").innerHTML = "HOLD";
            holdArray[4] = 1;
        }
        else {
            document.getElementById("cardFiveHold").innerHTML = "";
            holdArray[4] = 0;
        }
    }
}


//Toggle DEAL/DRAW
function dealDraw() {
    if (document.getElementById("dealButton").innerHTML == "DEAL") {
        document.getElementById("dealButton").innerHTML = "DRAW";
    }
    else {
        document.getElementById("dealButton").innerHTML = "DEAL";
    }
}

