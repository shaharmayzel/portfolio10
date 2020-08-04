'use strict';

// NOTE: This is a global used only in the controller
var gLastRes = null;

$(document).ready(init);

function init() {
    createQuestsTree();
}

function onStartGuessing() {

    var $elStartGame = $('.game-start')
    $elStartGame.hide();

    renderQuest();
    var $elQuest = $('.quest')
    $elQuest.show();
    // TODO: hide the game-start section
    // TODO: show the quest section
}

function renderQuest() {
    
    
    // TODO: select the <h2> inside quest and update
    // its text by the currQuest text
    var currQuest = getCurrQuest()
    $('.quest h2').text(currQuest.txt)
    // console.log(getCurrQuest().txt);

}

function onUserResponse(res) {

    // If this node has no children
    if (isChildless(getCurrQuest())) {
        if (res === 'yes') {
            alert('Yes, I knew it!');

            // TODO: improve UX
        } else {
            alert('I dont know...teach me!')
            $('.new-quest').show()
            var $elQuest = $('.quest')
            $elQuest.hide();
            // TODO: hide and show new-quest section
        }
    } else {
        // TODO: update the lastRes global var
        gLastRes = res;
        moveToNextQuest(res);
        renderQuest();
    }
}

function onAddGuess() {

    console.log('Im here at onAddGuess');
    var lastRes = gLastRes
    var $newGuess = $('#newGuess').val()
    var $newQuest = $('#newQuest').val()


    console.log($newQuest);
    addGuess($newQuest, $newGuess, lastRes)
    // // TODO: Get the inputs' values
    // // TODO: Call the service addGuess
    onRestartGame();

    $('#newGuess').val('') 
    $('#newQuest').val('') 
    

}
    
   


function onRestartGame() {

    $('.new-quest').hide();
    $('.game-start').show();
    gLastRes = null;

    restartGame();

}

