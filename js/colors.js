var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = true;
var level = 0;

//почати нову гру при натисканні клавіші
$(document).keydown(function () {
  if (started){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = false;
  }
});



//Вибір кольору, за яким слідуватиме користувач
function nextSequence(){
  //ініціалізування масиву для нової гри
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  //Виберання випадкового кольорю
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //додавання анімації
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

//Відтворити звук
function playSound(name){
  var audio = new Audio(name + ".mp3");
  audio.play();
}


//Визначання натискання кнопки
$(".btn").on("click",  function (event) {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1);
});

//Анімація натискання кнопки
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");},
    100);
}

//Перевіряє, чи відповідає шаблон користувача системному шаблону
function checkAnswer(currentLevel){
  //перевіря послідовність клацанням миші
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if(gamePattern.length === userClickedPattern.length){
      //Успішний рівень
      setTimeout(function () {
        nextSequence()}, 1000);
    }  //Програний рівень
  } else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over")},
      200);
      $("h1").text("Game Over, Press Any Key to Restart");

      startOver();
    }
  }

  function startOver(){
    level = 0;
    gamePattern = [];
    started = true;
  }
