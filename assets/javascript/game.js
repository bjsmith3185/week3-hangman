
$(document).ready(function () {

    $(".container-start").show();
    $(".container-game").hide();
    $(".container-correct").hide();

    var win = 0;
    var loss = 0;
    var guessesRemaining = 9;

    var wordArray = ["tomato", "pickles", "cheese", "bacon", "lettuce", "ketchup", "mustard", "onion", "mayo"];
    var wordFromArray;
    var lengthOfWord = 0;
    var wordArrayCheck = [];
    var letterIsThere = false;
    var displayArray = [];
    var wrongLettersArray = [];
    var alreadyGuessesArray = [];
    var gameOver = false;
    var guessAgain = false;


    function selectWord() {
        wordFromArray;
        lengthOfWord = 0;
        wordArrayCheck = [];
        letterIsThere = false;
        displayArray = [];
        wrongLettersArray = [];
        gameOver = false;
        guessesRemaining = 9;
        alreadyGuessesArray = [];
        guessAgain = false;

        $("#start-button").on("click", function() {
            $(".container-start").hide();
            $(".container-game").show();
            $(".container-correct").hide();
        });



        wordFromArray = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log("this is word from array: " + wordFromArray);
        lengthOfWord = wordFromArray.length;
        wordArrayCheck = wordFromArray.split("");
        console.log("word check array: " + wordArrayCheck)

        for (var i = 0; i < lengthOfWord; i++) {
            displayArray[i] = "_";

        };
        console.log(displayArray)
        $(".display-results").text(displayArray.join(" "));
        $(".win").text("Wins = " + win);
        $(".loss").text("Losses = " + loss);
        $(".guess-remaining").text("Guesses Remaining = " + guessesRemaining);
    };

    selectWord();

    $(document).on('keypress', function (e) {
        var letterPicked = e.key.toLowerCase();
        console.log("letter " + letterPicked);

        for (var i = 0; i < alreadyGuessesArray.length; i++) {
            if (letterPicked === alreadyGuessesArray[i]) {
                guessAgain = true;
            };
        };

        if (guessAgain) {
            guessAgain = false;
            return;
        } else {
            alreadyGuessesArray.push(letterPicked);
            console.log("already guessed array: " + alreadyGuessesArray);
            $(".letters-guessed").text(alreadyGuessesArray);

            if (!guessAgain) {

                if (!gameOver) {
                    for (var i = 0; i < lengthOfWord; i++) {
                        if (letterPicked === wordArrayCheck[i]) {
                            letterIsThere = true;
                        }
                    };

                    if (!letterIsThere) {
                        wrongLettersArray.push(letterPicked);
                        $(".wrong-guess").text("Letters Guessed Incorrectly: " + wrongLettersArray);
                        guessesRemaining--;

                        if (guessesRemaining < 2) {
                            $(".guess-remaining").toggleClass("warning");;
                        }


                        $(".guess-remaining").text("Guesses Remaining = " + guessesRemaining);
                        if (guessesRemaining === 0) {
                            gameOver = true;
                            loss++;
                            $(".loss").text("Losses = " + loss);
                            alert("game is over");
                            selectWord();
                        };

                    } else {
                        letterIsThere = false;
                        for (var i = 0; i < lengthOfWord; i++) {
                            if (letterPicked === wordArrayCheck[i]) {
                                displayArray[i] = letterPicked;
                            }
                        }
                        $(".display-results").text(displayArray.join(" "));

                        if (displayArray.toString() === wordArrayCheck.toString()) {

                            gameOver = true;
                            win++;
                            $(".win").text("Wins = " + win);
                            selectWord();
                        };
                    };

                };

            };
        };

    });

});

