'use strict'

function onInit() {
    console.log('Init');
    renderTodos();
}

function onTodoToggle(elTodo, todoId) {
    toggleTodo(todoId)
    renderTodos()
    // elTodo.classList.toggle('done')
}

function renderTodos() {
    var strHTML = ''
    var todos = getTodosForDisplay();
    if (todos.length === 0) {
        strHTML += `<h4 class="no-todos">No todos / No Active Todos, No Done Todos </h4>`
    }
    else {
        todos.forEach(function (todo) {
            var className = (todo.isDone) ? 'done' : ''
            strHTML += `
        <li onclick="onTodoToggle(this, '${todo.id}')" class="${className}">
            ${todo.txt} importance: ${todo.importance} time: ${todo.time}
            <button onclick="onTodoRemove(event, '${todo.id}')">x</button>
        </li>
        `;
        })
    }

    var elTodoList = document.querySelector('.todo-list');
    elTodoList.innerHTML = strHTML;

    document.querySelector('.total-count').innerText = getTodosCount();
    document.querySelector('.active-count').innerText = getActiveCount();
}

function onTodoRemove(ev, todoId) {
    confirm('sure?')
    ev.stopPropagation();
    removeTodo(todoId);
    renderTodos();
}

function onAddTodo() {
    var elTodoTxt = document.querySelector('.todo-txt');
    var elImpVal = document.querySelector('.imp-val');
    var currentdate = new Date();
    var dateTime = currentdate.getHours() + ":"
        + currentdate.getMinutes();

    var todoTxt = elTodoTxt.value
    var impVal = elImpVal.value
    // + ', importance:' + elImpVal + ', (' + datetime + ')'
    addTodo(todoTxt, impVal, dateTime);
    if (elTodoTxt.value !== '') renderTodos();
    elTodoTxt.value = ''
}

function onSetFilter(filterBy) {
    setFilter(filterBy);
    renderTodos();
}

function onSetSort(sortBy) {
    console.log(sortBy);
    setSort(sortBy);
    renderTodos();

}

// function onSetImp(importance) {
//     setImp(importance);
// }
