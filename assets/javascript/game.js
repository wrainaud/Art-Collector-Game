// William Rainaud
// Rutgers Coding Bootcamp 
// Homework Assignment 4 - Crystal Collector Game // 

// Function for New Game

var artCollectorGame = {

    // Declare Variables

    winCount: 0,
    lossCount: 0,
    playerScore: 0,
    randomScore: 0,
    artVal: [],

    //  Game Score Function

    updateScore: function() {
        $("#wins-counter").text(this.winCount);
        $("#losses-counter").text(this.lossCount);
        $("#player-score").text(this.playerScore);
        $("#random-score").text(this.randomScore);
        $("#message").html("<strong>Click a Painting below to Get Started!</strong>");

    },

	// Game Start Function 

    gameStart: function() {
        this.playerScore = 0;
        this.randomScore = (Math.floor(Math.random() * 138) + 1);
        this.artVal = [];

        for(i = 0; i < 4; i++) {
            this.artVal[i] = (Math.floor(Math.random() * 17) + 1);
        }

        this.updateScore();
    },

    // Game Logic Function

    gameLogic: function(val) {
        this.playerScore += this.artVal[val]
        this.updateScore();
        if(this.playerScore > this.randomScore) {
            this.lossCount+=1;
            this.gameStart();
            $("#message").html("<strong>You <a>Lose!</a> Good Day Sir! </strong>");

        }

        if(this.playerScore === this.randomScore) {
            this.winCount+=1;
            this.gameStart();
            $("#message").html("<strong>You <b>Win!</b> Have a Nice Life! </strong>");
            
        }

    },

};

$("body").ready(function() {   
    artCollectorGame.gameStart();
    $(".btn-default").on("click touchstart", function() {
        artCollectorGame.gameLogic(this.value);
    });

});


