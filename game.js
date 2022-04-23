
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function gameOver() {
    $("body").addClass("game-over")
    setTimeout(() => {
        $("body").removeClass("game-over")
    }, 100);
    $("h1").text("Game Over, Press Any Key to Restart")
    var audio = new Audio("sounds/" + "wrong" + ".mp3");
    audio.play();
    started = false;
}

function clickAnimate(color) {

    $("." + color).addClass("pressed")
    setTimeout(() => {
        $("." + color).removeClass("pressed")
    }, 100);

}
function answer(a, b) {                                                             
    if (Array.isArray(a) &&
        Array.isArray(b) &&
        a.every((val, index) => val === b[index])) {
        $("h1").text("Level " + num)
        console.log(userClickedPattern)
        console.log(gamePattern)
            if (a.length === b.length) {
                setTimeout(function () {
                    newSequence()
                }, 1000)
            }
    }
    else {
        console.log("wrong..!")
        $("h1").text("Press A Key to Start")
        gamePattern = [];
        gameOver()
        num = 0;
        
    }
}


function playSound(color) {

    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();

}

function newSequence() {
    userClickedPattern = [];
    num++
    var randomNumber = Math.floor(Math.random() * 4)
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeIn(100);
    playSound(randomChosenColour);

}
$(".btn").click(function () {
    
    var clicked_button = $(this).attr("id")
    userClickedPattern.push(clicked_button);
    playSound(clicked_button);
    clickAnimate(clicked_button);
    answer(userClickedPattern, gamePattern)

})

var started = false;

var num = 0;
$(document).keypress(function () {
   if(!started){
    newSequence()
    $("h1").text("Level " + num)
    started = true;
   }

})











