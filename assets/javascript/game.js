
$(document).ready(function () {

    var win = 0;
    var loss = 0;
    var guessesRemaining = 9;

    var wordArray = ["guess1", "guess2", "guess3", "guess4",];
    var wordFromArray;
    var lengthOfWord = 0;
    var wordArrayCheck = [];
    var letterIsThere = false;
    var displayArray = [];
    var wrongLettersArray = [];
    var gameOver = false;

    function selectWord() {
        wordFromArray;
        lengthOfWord = 0;
        wordArrayCheck = [];
        letterIsThere = false;
        displayArray = [];
        wrongLettersArray = [];
        gameOver = false;
        guessesRemaining = 9;

        var number = 

        wordFromArray = wordArray[Math.floor(Math.random() * wordArray.length)];
        console.log("this is word from array: " + wordFromArray);
        lengthOfWord = wordFromArray.length;
        wordArrayCheck = wordFromArray.split("");

        for (var i = 0; i < lengthOfWord; i++) {
            displayArray[i] = "_";
        };
        $(".display-results").text(displayArray.join(" "));
        $(".win").text("Wins = " + win);
        $(".loss").text("Losses = " + loss);
        $(".guess-remaining").text("Guesses Remaining = " + guessesRemaining);
    };

    selectWord();

    $(document).on('keypress', function (e) {
        var letterPicked = e.key.toLowerCase();
        console.log("letter " + letterPicked);

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

    });

});

