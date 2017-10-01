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
  score = [0,0,0,0,0,0,0,0,0];
  turn = 0;
  player: '';
}

function playerTurn() {
  if (turn % 2 !== 0) {
    player = -1;
    console.log(player);
    console.log('player O turn');
  } else {
    player = 1;
    console.log(player);
    console.log('player X turn');
  }
}

function handleClick(evt) {
  var tile = evt.target.id;
  console.log('tile clicked: ' + tile);
  playerTurn();

  // take tile id, update score array
  switch(tile) {
    case 'a':
      // check if array item is 1 or -1
      // if neither: update array item for tile clicked
      score[0] = player;
      turn++;
      break;
    case 'b':
      score[1] = player;
      turn++;
      break;
    case 'c':
      score[2] = player;
      turn++;
      break;
    case 'd':
      score[3] = player;
      turn++;
      break;
    case 'e':
      score[4] = player;
      turn++;
      break;
    case 'f':
      score[5] = player;
      turn++;
      break;
    case 'g':
      score[6] = player;
      turn++;
      break;
    case 'h':
      score[7] = player;
      turn++;
      break;
    case 'i':
      score[8] = player;
      turn++;
      break;
    default: 
      break;
  }
  console.log('current score: ' + score);
  checkForWin();
  render();
}

function checkForWin() {
  // checks for score of 3 or -3 in 8 win cases
  
}

function render() {

}

function resetGame() {
  init();
  console.log('reset button was clicked');
}

init();
  
