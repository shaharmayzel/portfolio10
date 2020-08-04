const PACMAN = '&#9924;';
var gIntervalG = null;
var gIntervalC = null;

var gPacman;

function createPacman(board) {
  gPacman = {
    location: {
      i: 3,
      j: 5
    },
    isSuper: false
  };
  board[gPacman.location.i][gPacman.location.j] = PACMAN;
}

function movePacman(eventKeyboard) {
  if (!gGame.isOn) return;
  // console.log('eventKeyboard:', eventKeyboard);

  var nextLocation = getNextLocation(eventKeyboard);
  // User pressed none-relevant key in the keyboard
  if (!nextLocation) return;


  gIntervalCherry = setInterval(cherryCreate, 3000);

  var nextCell = gBoard[nextLocation.i][nextLocation.j];

  // Hitting a WALL, not moving anywhere
  if (nextCell === WALL) return;

  // Hitting FOOD? update score
  if (nextCell === FOOD) {
    console.log(nextLocation);
    updateScore(1);
    gEmptyCells.push(nextLocation);
    console.log(nextCell);
  }

  if (nextCell === SFOOD) pacmanSup();

  else if (nextCell === GHOST) {
    if (gPacman.isSuper === true) {
      var ghost = gGhosts.pop();
    }
    else {
      gameOver()
      renderCell(gPacman.location, EMPTY);
      return;
    }
  }

  if (nextCell === CHERRY) {
    updateScore(10);
  }


  // Update the model to reflect movement
  gBoard[gPacman.location.i][gPacman.location.j] = EMPTY;
  // Update the DOM
  renderCell(gPacman.location, EMPTY);

  // Update the pacman MODEL to new location  
  gPacman.location = nextLocation;

  gBoard[gPacman.location.i][gPacman.location.j] = PACMAN;
  // Render updated model to the DOM
  renderCell(gPacman.location, PACMAN);

}

function pacmanSup() {
  gPacman.isSuper = true;
  gIntervalG = setTimeout(superPac, 5000);
  var newG = 3 - gGhosts.length
  for (var i = 0; i < newG; i++) {
    createGhost;
  }
}


function cherryCreate() {
  if (!gEmptyCells) return;

  var idx = getRandomIntInclusive(0, gEmptyCells.length-1);
  console.log(gEmptyCells[idx]);

  var i = gEmptyCells[idx].i;
  var j = gEmptyCells[idx].j;
  var coord = {i:i, j:j};

  gBoard[i][j] = CHERRY;
  renderCell(coord, CHERRY);
}


function superPac() {
  gPacman.isSuper = false;
}

function getNextLocation(keyboardEvent) {
  var nextLocation = {
    i: gPacman.location.i,
    j: gPacman.location.j
  };

  switch (keyboardEvent.code) {
    case 'ArrowUp':
      nextLocation.i--;
      break;
    case 'ArrowDown':
      nextLocation.i++;
      break;
    case 'ArrowLeft':
      nextLocation.j--;
      break;
    case 'ArrowRight':
      nextLocation.j++;
      break;
    default: return null;
  }
  return nextLocation;

}