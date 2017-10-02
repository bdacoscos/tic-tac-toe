console.log('JS ready!');

/*----- constants -----*/

/*----- app's state (variables) -----*/
var turn;
var score;
var player;

/*----- cached element references -----*/
var gameBoard = document.getElementById('game-board'); 
var resetButton = document.querySelector('button'); 

/*----- event listeners -----*/
gameBoard.addEventListener('click', handleClick);
resetButton.addEventListener('click', resetGame);

/*----- functions -----*/
function init(){
  score = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0};
  turn = 1;
  player: '';

}

function playerTurn() {
  if (turn % 2 === 0) {
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

  if (score[tile] === 0) {
    score[tile] = player;
    turn++;
  } else {
    return;
  }

  console.log(score[tile]);
  console.log(score);
  // checkForWin();
  render(evt);
}


// function checkForWin() {
//   // checks for score of 3 or -3 in 8 win cases

//   // check 8 win conditions:

//   // switch (tally) {
//   //   case 'abc' :
//   //     var tally = score.a + score.b + score.c;
//   //     if (tally === 3 || -3) {
//   //       console.log('winner!');
//   //     }
//   // }

// }


function render(evt) {
  console.log('render() is listening');

  if (player === 1 ) {
    evt.target.innerHTML = "X";
  } else {
    evt.target.innerHTML = "O";
  }
}

function resetGame(evt) {
  player = '';
  turn = 1;
  score = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 };

  var x = document.getElementsByTagName('td');

  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML = '';
  }

  init();
  
  console.log(player);
  console.log(turn);
  console.log(score);
  console.log('reset button was clicked');
}

init();
  
