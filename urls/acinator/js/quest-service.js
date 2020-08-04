var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

function createQuestsTree() {

    var questTree = loadFromStorage('questTree')
    if(!questTree || !questTree.length) {
        
    var questTree = createQuest('Male?');

    questTree.yes = createQuest('Gandhi');
    questTree.no = createQuest('Rita');

    


    gPrevQuest = null;
    _saveTree();



    }
    
    gQuestsTree = questTree;
    gCurrQuest = gQuestsTree;
    console.log(gCurrQuest);
}

function createQuest(txt) {
    return {
        txt: txt,
        yes: null,
        no: null
    }
}

function isChildless(node) {
    return (node.yes === null && node.no === null)
}

function moveToNextQuest(res) {
   gPrevQuest = gCurrQuest;
   gCurrQuest = gCurrQuest[res]

    // TODO: update the gPrevQuest, gCurrQuest global vars
}

function addGuess(newQuestTxt, newGuessTxt, lastRes) {


    // console.log('newQuestTxt',newQuestTxt);
    // console.log('newGuessTxt',newGuessTxt);
    // console.log('lastRes',lastRes);

    var newQuest = createQuest(newQuestTxt)
    newQuest.yes = createQuest(newGuessTxt)
    newQuest.no = gCurrQuest
        console.log(gPrevQuest);
    gPrevQuest[lastRes] = newQuest;


    // console.log(gQuestsTree);



    // TODO: Create and Connect the 2 Quests to the quetsions tree
    _saveTree();
   
}

function restartGame() {
     gCurrQuest = gQuestsTree;
    gPrevQuest = null;


}



function getCurrQuest(){
    return gCurrQuest
}


function _saveTree() {
    saveToStorage('questTree', gQuestsTree)
}


