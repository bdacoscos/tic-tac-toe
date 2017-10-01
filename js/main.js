console.log('JS ready!');

/*----- constants -----*/

/*----- app's state (variables) -----*/
var turn;
var score;
var player;

/*----- cached element references -----*/
document.getElementById('game-board').addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', resetGame);

/*----- event listeners -----*/


/*----- functions -----*/
function init(){
  score = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0};
  turn = 0;
  player: '';

}

function playerTurn() {
  if (turn % 2 !== 0) {
    player = -1;
    console.log('turn: ' + turn);
    console.log('player O turn');
  } else {
    player = 1;
    console.log('turn: ' + turn);
    console.log('player X turn');
  }
}

function handleClick(evt) {
  var tile = evt.target.id;
  console.log('tile clicked: ' + tile);
  playerTurn();
  switch (tile) {
    case 'a':
      console.log('a is being clicked');
      if (score.a === 0) {
        console.log('tile a empty');
        score.a = player;
        turn++;
      } else {
        return;
      }
      break;
    case 'b':
      console.log('b is being clicked');
      if (score.b === 0) {
        console.log('tile b empty');
        score.b = player;
        turn++;
      } else {
        return;
      }
      break;
    case 'c':
      console.log('c is being clicked');
      if (score.c === 0) {
        console.log('tile c empty');
        score.c = player;
      }
      turn++;
      break;
    case 'd':
      console.log('d is being clicked');
      if (score.d === 0) {
        console.log('tile d empty');
        score.d = player;
      }
      turn++;
      break;
    case 'e':
      console.log('e is being clicked');
      if (score.e === 0) {
        console.log('tile e empty');
        score.e = player;
      }
      turn++;
      break;
    case 'f':
      console.log('f is being clicked');
      if (score.f === 0) {
        console.log('tile f empty');
        score.f = player;
      }
      turn++;
      break;
    case 'g':
      console.log('g is being clicked');
      if (score.g === 0) {
        console.log('tile g empty');
        score.g = player;
      }
      turn++;
      break;
    case 'h':
      console.log('h is being clicked');
      if (score.h === 0) {
        console.log('tile h empty');
        score.h = player;
      }
      turn++;
      break;
    case 'i':
      console.log('i is being clicked');
      if (score.i === 0) {
        console.log('tile i empty');
        score.i = player;
      }
      turn++;
      break;
    default:
      break;
  }

  console.log(score);
  // checkForWin();
  render(evt);
}



function render(evt) {
  console.log('render() is listening');

  if (player === 1 ) {
    evt.target.innerHTML = "X";
    console.log('render working, player X');
  } else {
    evt.target.innerHTML = "O";
    console.log('render working, player O')
  }
}

function resetGame() {
  player = '';
  turn = 0;

  score 

  init();
  console.log('reset button was clicked');
}

init();
  
