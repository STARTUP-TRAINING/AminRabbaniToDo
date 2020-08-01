elems.addColumnBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const columnName = elems.columnName.value;
    elems.columnName.value = '';
    if(!columnName) return;
    addColumnAction(columnName);
    render();
})

function addColumnAction(columnName) {
    state.columns.push({
        id: makeId(),
        name: columnName,
        items: []
    });
}

function addTaskAction(columnName) {
    const task = document.getElementById(columnName).value;
    if(task == '') return;
    document.getElementById(columnName).value = '';
    const column = state.columns.filter(function(column) { return column.name === columnName;});
    column[0].items.push({
        id: makeId(),
        content: task,
    });
    render();
}

function moveTaskAction(srcColumnId, destColumnId, taskId) {
    const srcColumn = selectById(state.columns, srcColumnId);
    const destColumn = selectById(state.columns, destColumnId);
    const task = {... selectById(srcColumn.items, taskId)};
    srcColumn.items = srcColumn.items.filter(function(item){ return item.id !== taskId; });
    destColumn.items.push(task);
    console.log(task);
}