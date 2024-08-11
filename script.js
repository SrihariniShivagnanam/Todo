const inputField = document.getElementById('input-box');
const addButton = document.getElementById("add");
const listContainer = document.getElementById("list-container");

addButton.addEventListener('click', addTask);

function addTask() {
    var inputValue = inputField.value.trim();
    if (inputValue !== "") {
        var li = document.createElement('li');
        li.textContent = inputValue;
        var deleteButton = createDeleteButton(li);
        li.appendChild(deleteButton);
        listContainer.appendChild(li);
        inputField.value = "";
    } else {
        alert('Please enter some text!');
    }
}

function createDeleteButton(li) {
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        listContainer.removeChild(li);
    };
    return deleteButton;
}