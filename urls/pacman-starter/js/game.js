'use strict';
const WALL = '&#128314;';
const FOOD = '.';
const EMPTY = ' ';
const SFOOD = '&#127849;';
const CHERRY = '&#127826;';

var gBoardFood = null;
var gSUPER = false;
var gCherrys;
var gEmptyCells = [];

var gBoard;
var gGame = {
  score: 0,
  isOn: false
};

function init() {
  gBoard = buildBoard();

  createPacman(gBoard);
  createGhosts(gBoard);

  printMat(gBoard, '.board-container');
  // console.table(gBoard);
  gGame.isOn = true;
}

function buildBoard() {
  var WallCount = 0;
  var BoardFood = -1;
  var SIZE = 10;
  var board = [];
  for (var i = 0; i < SIZE; i++) {
    board.push([]);
    for (var j = 0; j < SIZE; j++) {


      if ((i === 1 && j === 1) || (i === 1 && j === 8) || (i === 8 && j === 1) || (i === 8 && j === 8)) {
        board[i][j] = SFOOD;
      }
      else {
        board[i][j] = FOOD;
      }
      BoardFood++

      if (i === 0 || i === SIZE - 1 ||
        j === 0 || j === SIZE - 1 ||
        (j === 3 && i > 4 && i < SIZE - 2)) {

        board[i][j] = WALL;


        WallCount++

        // gInterval = setInterval(cherryAdd, 5000);
      }
    }
  }
  gBoardFood = BoardFood = BoardFood - WallCount;
  console.log(gBoardFood);
  return board;

}




// function cherryAdd() {
//   var idx = getRandomIntInclusive(0, gEmptyCells.length - 1);
//   var cherry = gEmptyCells[idx]
//   var i = cherry.location.i;
//   var j = cherry.location.j;
//   gBoard[cherry.location.i][cherry.location.j] = cherry.currCellContent
//         renderCell(ghost.location, ghost.currCellContent)

//         // move the ghost
//         ghost.location = nextLocation

//         // keep the contnet of the cell we are going to
//         ghost.currCellContent = gBoard[nextLocation.i][nextLocation.j]

//         // move the ghost and update model and dom
//         gBoard[ghost.location.i][ghost.location.j] = GHOST
//         renderCell(ghost.location, getGhostHTML(ghost))
// }

function updateScore(value) {
  // Update both the model and the dom for the score
  gGame.score += value;
  document.querySelector('header h3 span').innerText = gGame.score;
  console.log(gGame.score);
  gameWon();
}



function getCherryHTML(cherry) {
  return `<span>${CHERRY}</span>`
  
}


function gameOver() {
  console.log('Game Over');
  gGame.isOn = false;
  clearInterval(gIntervalGhosts);
  gIntervalGhosts = null;
  // var body = document.querySelector(body);
  // body.innerHTML = <div><h1>Game Over</h1></div>
  var board = document.querySelector('.board-container');
  board.innerHTML = `<h1>Game Over, you lost, try again</h1><div><button onclick = "init()">reset</button></div>`
}

function gameWon() {
  if (gBoardFood === gGame.score) {
    console.log('Game Is Won!');
    gGame.isOn = false;
    clearInterval(gIntervalGhosts);
    gIntervalGhosts = null;
    var board = document.querySelector('.board-container');
    board.innerHTML = `<h1>YOU ARE A VICTOR!!!</h1><div><button onclick = "init()">reset</button></div>`
  }
}

// function gameWin() {
//   if()
// }



