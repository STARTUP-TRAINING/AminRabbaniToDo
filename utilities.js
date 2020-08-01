function selectById(arr, id) {
    return arr.filter(function(item) { return item.id === id; })[0];
}

let _id = 0;
function makeId() {
    return "id#" + (++ _id);
}
