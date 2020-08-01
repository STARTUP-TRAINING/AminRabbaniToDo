function createMoveBtns(columnId, itemId) {
    const currentColumn = selectById(state.columns, columnId);
    const footerElem = document.createElement ('footer');
    state.columns
        .filter(function(column) { return column.id !== columnId;})
        .forEach(function(column) {
            const buttonElem = document.createElement ('button');
            buttonElem.innerHTML = column.name;
            buttonElem.classList.add('btn');
            buttonElem.setAttribute('onclick', `moveTaskAction('${columnId}', '${column.id}', '${itemId}'); render()`);
            footerElem.appendChild(buttonElem);
        });
    return footerElem;
}


function render() {
    elems.columns.innerHTML = '';
    const mainElem = document.getElementById('columns');
    state.columns.forEach(function(column) {
        const columnElem = document.createElement('div');
        const main = document.createElement('main');
        columnElem.classList.add('column');
        columnElem.innerHTML = `<header>
            <h2>${column.name}</h2>
        </header>
        <form id="add-task-form">
            <input type="text" id=${column.name} class="textBox" placeholder="Add Task..." value="" />
            <input type="button" id="add-task-btn" class="add-btn" value="Add" onclick="addTaskAction('${column.name}');" /><br>
        </form>`;
        mainElem.appendChild(columnElem);
        columnElem.appendChild(main);
        column.items.forEach(function(item) {
            const taskElem = document.createElement('div');
            taskElem.classList.add('task');
            taskElem.innerHTML = `<p>${item.content}</p>`;
            taskElem.appendChild(createMoveBtns(column.id, item.id));
            main.appendChild(taskElem);
        })
    })
    
}