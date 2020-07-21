
//Only update the $ bet sizing whne the Bet button is clicked
function betSize() {
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
}

/*****************************************************************************/
//  Takes the outputs [hand, handValue] from evalute() and update the DOM with 
//  card values, new cards, credits and bet sizing.    
/*****************************************************************************/
function play() {

    //Only allow playing if credit is positive
    if (document.getElementById("credit").innerHTML > 0) {

        var betUnit = 0.25; //Smallest betting unit

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

        var [hand, handValue] = evaluate();

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

        document.getElementById("handValue").innerHTML = handValue.toUpperCase() + "</br>"; //Output hand value to DOM

        var betSizeWord = document.getElementById("betSize").innerHTML; //Get bet size in word from DOM

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

        var credit = Number(document.getElementById("credit").innerHTML); //Get credit on DOM

        credit += payOutObj[handValue] - betSizeNum; //Update credit after hand is evaluated

        document.getElementById("credit").innerHTML = credit; //Update DOM with updated credit

        //Object mapping cards characters to images
        var obj = {
            "Ac": "<img src='cards/Ace-Club.jpg'/>",
            "Ad": "<img src='cards/Ace-Diamond.jpg'/>",
            "Ah": "<img src='cards/Ace-Heart.jpg'/>",
            "As": "<img src='cards/Ace-Spade.jpg'/>",
            "Kc": "<img src='cards/King-Club.jpg'/>",
            "Kd": "<img src='cards/King-Diamond.jpg'/>",
            "Kh": "<img src='cards/King-Heart.jpg'/>",
            "Ks": "<img src='cards/King-Spade.jpg'/>",
            "Qc": "<img src='cards/Queen-Club.jpg'/>",
            "Qd": "<img src='cards/Queen-Diamond.jpg'/>",
            "Qh": "<img src='cards/Queen-Heart.jpg'/>",
            "Qs": "<img src='cards/Queen-Spade.jpg'/>",
            "Jc": "<img src='cards/Jack-Club.jpg'/>",
            "Jd": "<img src='cards/Jack-Diamond.jpg'/>",
            "Jh": "<img src='cards/Jack-Heart.jpg'/>",
            "Js": "<img src='cards/Jack-Spade.jpg'/>",
            "Tc": "<img src='cards/Ten-Club.jpg'/>",
            "Td": "<img src='cards/Ten-Diamond.jpg'/>",
            "Th": "<img src='cards/Ten-Heart.jpg'/>",
            "Ts": "<img src='cards/Ten-Spade.jpg'/>",
            "9c": "<img src='cards/Nine-Club.jpg'/>",
            "9d": "<img src='cards/Nine-Diamond.jpg'/>",
            "9h": "<img src='cards/Nine-Heart.jpg'/>",
            "9s": "<img src='cards/Nine-Spade.jpg'/>",
            "8c": "<img src='cards/Eight-Club.jpg'/>",
            "8d": "<img src='cards/Eight-Diamond.jpg'/>",
            "8h": "<img src='cards/Eight-Heart.jpg'/>",
            "8s": "<img src='cards/Eight-Spade.jpg'/>",
            "7c": "<img src='cards/Seven-Club.jpg'/>",
            "7d": "<img src='cards/Seven-Diamond.jpg'/>",
            "7h": "<img src='cards/Seven-Heart.jpg'/>",
            "7s": "<img src='cards/Seven-Spade.jpg'/>",
            "6c": "<img src='cards/Six-Club.jpg'/>",
            "6d": "<img src='cards/Six-Diamond.jpg'/>",
            "6h": "<img src='cards/Six-Heart.jpg'/>",
            "6s": "<img src='cards/Six-Spade.jpg'/>",
            "5c": "<img src='cards/Five-Club.jpg'/>",
            "5d": "<img src='cards/Five-Diamond.jpg'/>",
            "5h": "<img src='cards/Five-Heart.jpg'/>",
            "5s": "<img src='cards/Five-Spade.jpg'/>",
            "4c": "<img src='cards/Four-Club.jpg'/>",
            "4d": "<img src='cards/Four-Diamond.jpg'/>",
            "4h": "<img src='cards/Four-Heart.jpg'/>",
            "4s": "<img src='cards/Four-Spade.jpg'/>",
            "3c": "<img src='cards/Three-Club.jpg'/>",
            "3d": "<img src='cards/Three-Diamond.jpg'/>",
            "3h": "<img src='cards/Three-Heart.jpg'/>",
            "3s": "<img src='cards/Three-Spade.jpg'/>",
            "2c": "<img src='cards/Two-Club.jpg'/>",
            "2d": "<img src='cards/Two-Diamond.jpg'/>",
            "2h": "<img src='cards/Two-Heart.jpg'/>",
            "2s": "<img src='cards/Two-Spade.jpg'/>",
        };

        //Update DOM with new cards 
        document.getElementById("outputDiv").innerHTML = "";
        document.getElementById("outputDiv").innerHTML += obj[hand[0]];
        document.getElementById("outputDiv").innerHTML += obj[hand[1]];
        document.getElementById("outputDiv").innerHTML += obj[hand[2]];
        document.getElementById("outputDiv").innerHTML += obj[hand[3]];
        document.getElementById("outputDiv").innerHTML += obj[hand[4]];
    }
}