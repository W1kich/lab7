//Ввід зміних
 let player = document.getElementById('player');
  let a = document.getElementById('a');
  let s = document.getElementById('s');
  let d = document.getElementById('d');
  let f = document.getElementById('f');
  let g = document.getElementById('g');
  let h = document.getElementById('h');
function playmusic(value){
  let player = document.getElementById('player');
  let newvalue = value.id


//Вибір картинки за допомогою кнопок
  switch (newvalue){
    case "a":
      player.setAttribute('src', 'mp3/a.mp3');
      player.play();
      a.className ="cell_";
      setTimeout( function(){ a.className = 'cell'; }, 600 );
      break;
    case "s":
      player.setAttribute('src', 'mp3/s.mp3');
      player.play();
      s.className ="cell_";
      setTimeout( function(){ s.className = 'cell'; }, 600 );
      break;
    case "d":
      player.setAttribute('src', 'mp3/d.mp3');
      player.play();
      d.className ="cell_";
      setTimeout( function(){ d.className = 'cell'; }, 600 );
      break;
    case "f":
      player.setAttribute('src', 'mp3/f.mp3');
      player.play();
      f.className ="cell_";
      setTimeout( function(){ f.className = 'cell'; }, 600 );
      break;
    case "g":
      player.setAttribute('src', 'mp3/g.mp3');
      player.play();
      g.className ="cell_";
      setTimeout( function(){ g.className = 'cell'; }, 600 );
      break;
    case "h":
      player.setAttribute('src', 'mp3/h.mp3');
      player.play();
      h.className ="cell_";
      setTimeout( function(){ h.className = 'cell'; }, 600 );
      break;      
  }
}

//Вибір за допомогою клаватури
document.addEventListener("keydown", function(event){
let newvalue = event.key
switch (newvalue){
  case "a":
    player.setAttribute('src', 'mp3/a.mp3');
    player.play();
    a.className ="cell_";
    setTimeout( function(){ a.className = 'cell'; }, 600 );
    break;
  case "s":
    player.setAttribute('src', 'mp3/s.mp3');
    player.play();
    s.className ="cell_";
    setTimeout( function(){ s.className = 'cell'; }, 600 );
    break;
  case "d":
    player.setAttribute('src', 'mp3/d.mp3');
    player.play();
    console.log("3");
    d.className ="cell_";
    setTimeout( function(){ d.className = 'cell'; }, 600 );
    break;
  case "f":
    player.setAttribute('src', 'mp3/f.mp3');
    player.play();
    f.className ="cell_";
    setTimeout( function(){ f.className = 'cell'; }, 600 );
    break;
  case "g":
    player.setAttribute('src', 'mp3/g.mp3');
    player.play();
    g.className ="cell_";
    setTimeout( function(){ g.className = 'cell'; }, 600 );
    break;
  case "h":
    player.setAttribute('src', 'mp3/h.mp3');
    player.play();
    h.className ="cell_";
    setTimeout( function(){ h.className = 'cell'; }, 600 );
    break;
}
});
