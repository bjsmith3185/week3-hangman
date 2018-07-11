

    var guessesRemaining = 4;


    $("#button").on("click", function() {
        guessesRemaining--;

    if (guessesRemaining < 2) {
        $(".guess-remaining").toggleClass("warning");;
    }


    $(".guess-remaining").text("Guesses Remaining = " + guessesRemaining);
    if (guessesRemaining === 0) {
        alert("game over");
       
    };
    });

    