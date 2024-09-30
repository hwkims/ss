var buttonColours = ["red", "blue", "green", "yellow"];

var pattern = [];
var userPattern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSeq();
    started = true;
  }
});

function nextSeq() {
  userPattern = [];
  var rand = Math.floor(Math.random() * 4);
  var randomChoosenColour = buttonColours[rand];
  pattern.push(randomChoosenColour);

  level++;
  $("#level-title").text("Level " + level);

  $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  var audio = new Audio("sounds/" + randomChoosenColour + ".mp3");
  audio.play();
}

$(".btn").on("click", function () {
  var userColour = $(this).attr("id");
  userPattern.push(userColour);
  makeSound(userColour);
  animate(userColour);
  checkAnswer(userPattern.length - 1);
});

function makeSound(name) {
  switch (name) {
    case "red":
      var audio = new Audio("sounds/red.mp3");
      audio.play();
      break;
    case "blue":
      var audio = new Audio("sounds/blue.mp3");
      audio.play();
      break;
    case "yellow":
      var audio = new Audio("sounds/yellow.mp3");
      audio.play();
      break;
    case "green":
      var audio = new Audio("sounds/green.mp3");
      audio.play();
      break;
  }
}

function animate(currColour) {
  $("#" + currColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currLevel) {
  if (userPattern[currLevel] === pattern[currLevel]) {
    console.log("Success");
    if (userPattern.length === pattern.length) {
      setTimeout(function () {
        nextSeq();
      }, 1000);
    }
  } else {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startover();
  }
}

function startover() {
  pattern = [];
  level = 0;
  started = false;
}
