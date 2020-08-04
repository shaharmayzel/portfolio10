const GHOST = '&#9781;';

var gIntervalGhosts;
var gGhosts;

function createGhost(board) {
    var ghost = {
        location: {
            i: 3,
            j: 3
        },
        currCellContent: FOOD,
        color: getRandomColor()
    };
    gGhosts.push(ghost);
    board[ghost.location.i][ghost.location.j] = GHOST;

    board[ghost.location.i][ghost.location.j]

    // var randNum = getRandomIntInclusive(0, 100)
    // if (randNum < 25) {
    //     GHOST.style.color = 'red';
    // } else if (randNum < 50) {
    //     GHOST.style.color = 'blue';
    // } else if (randNum < 75) {
    //     GHOST.style.color = 'pink';
    // } else {
    //     GHOST.style.color = 'green';
    // }

}


function createGhosts(board) {
    gGhosts = [];

    // empty the gGhosts array, create some ghosts
    createGhost(board)
    createGhost(board)
    createGhost(board)
    //  and run the interval to move them
    gIntervalGhosts = setInterval(moveGhosts, 1000)
}

function moveGhosts() {
    for (var i = 0; i < gGhosts.length; i++) {
        var ghost = gGhosts[i];

        // Create the moveDiff
        var moveDiff = getMoveDiff();
        var nextLocation =
        {
            i: ghost.location.i + moveDiff.i,
            j: ghost.location.j + moveDiff.j
        }
        // console.log('ghost.location', ghost.location, 'nextLocation', nextLocation, 'moveDiff', moveDiff)
        var nextCel = gBoard[nextLocation.i][nextLocation.j]
        // if WALL - give up
        if (nextCel === WALL) return
        // if GHOST - give up
        if (nextCel === GHOST) {
            return
        }

        // if PACMAN - gameOver
        if (nextCel === PACMAN) {
            if(gPacman.isSuper === true) {
                var ghost = gGhosts.pop();
              }
            gameOver();
            return
        }

        // set back what we stepped on: update Model, DOM
        gBoard[ghost.location.i][ghost.location.j] = ghost.currCellContent
        renderCell(ghost.location, ghost.currCellContent)

        // move the ghost
        ghost.location = nextLocation

        // keep the contnet of the cell we are going to
        ghost.currCellContent = gBoard[nextLocation.i][nextLocation.j]

        // move the ghost and update model and dom
        gBoard[ghost.location.i][ghost.location.j] = GHOST
        renderCell(ghost.location, getGhostHTML(ghost))

    }
}
function getMoveDiff() {
    var randNum = getRandomIntInclusive(0, 100)
    if (randNum < 25) {
        return { i: 0, j: 1 }
    } else if (randNum < 50) {
        return { i: -1, j: 0 }
    } else if (randNum < 75) {
        return { i: 0, j: -1 }
    } else {
        return { i: 1, j: 0 }
    }
}


function getGhostHTML(ghost) {
    if(gPacman.isSuper === true) {
    return `<span style="color:red" >${GHOST}</span>`
    }
    else{
        return `<span style="color:${ghost.color}" >${GHOST}</span>`
    }
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}







