'use strict';

var gFilterBy = 'all';
var gTodos;
var gImp = 1;
var gSortBy = 'importance';

_createTodos();

function getTodosForDisplay() {
    debugger;
    if (gFilterBy === 'all' && gSortBy === 'txt') {
        return gTodos;
    }
    if (gSortBy !== 'txt') {
        var todos = gTodos;
        if (gFilterBy !== 'all') {

            var todos = gTodos.filter(function (todo) {
                return (todo.isDone && gFilterBy === 'done') ||
                    (!todo.isDone && gFilterBy === 'active')
            })
        }

        if (gSortBy === 'importance') {
            debugger;
            var sortedTodos = todos.sort(function (a, b) {
                if (a.importance < b.importance) { return -1; }
                if (a.importance > b.importance) { return 1; }
                return 0;
            })

        }
        if (gSortBy === 'created') {
            debugger;
            var sortedTodos = todos.sort(function (a, b) {
                if (a.time > b.time) { return -1; }
                if (a.time < b.time) { return 1; }
                return 0;
            })

        }
        else {
            var sortedTodos =  todos
        }
    }
    return sortedTodos;
}

function removeTodo(todoId) {
    var todoIdx = gTodos.findIndex(function (todo) {
        return todo.id === todoId
    })
    // ES6 Style:
    // var todoIdx = gTodos.findIndex(todo => todo.id === todoId)
    gTodos.splice(todoIdx, 1);
    _saveTodos();
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function (todo) {
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone
    _saveTodos();

}

function addTodo(txt, imp, time) {
    var todo = _createTodo(txt, imp, time)
    gTodos.unshift(todo)
    _saveTodos();
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function setSort(sortBy) {
    gSortBy = sortBy;
}

function setImp(importance) {
    gImp = importance;
}


function getTodosCount() {
    return gTodos.length
}
function getActiveCount() {
    var activeTodos = gTodos.filter(function (todo) {
        return !todo.isDone
    })
    return activeTodos.length;
}

// COnventions: Those are private functions that are intended to use only in this file
function _createTodos() {

    var todos = loadFromStorage('myTodos')

    if (!todos || todos.length === 0) {
        var txts = ['Learn HTML', 'Master CSS', 'Love Javascript']
        // var todos = txts.map(function(txt){
        //     return _createTodo(txt)
        // })
        todos = txts.map(_createTodo)
        gTodos = todos;
        _saveTodos();
    }
    gTodos = todos;
}


function _createTodo(txt, imp, time) {
    var todo = {
        id: makeId(),
        txt: txt,
        isDone: false,
        time: time,
        importance: imp
    }
    return todo;
}

function _saveTodos() {
    saveToStorage('myTodos', gTodos)
}