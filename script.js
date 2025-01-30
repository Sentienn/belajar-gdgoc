let currentEditingTask = null;

function handleTask() {
    const input = document.getElementById('tf-input');
    const inputValue = input.value.trim();
    const taskButton = document.getElementById('task-button');

    if (inputValue === "") {
        alert("Please enter a task!");
        return;
    }

    if (currentEditingTask) {
        currentEditingTask.querySelector('span').textContent = inputValue;
        currentEditingTask = null;
        taskButton.textContent = 'Add Task';
    } else {
        addTask(inputValue);
    }

    input.value = '';
}

function addTask(taskText) {
    const taskContainer = document.getElementById('task-container');

    const task = document.createElement('li');
    task.classList.add('list-item');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.onclick = function () {
        startEditTask(task);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.onclick = function () {
        deleteTask(task);
    };

    task.appendChild(taskSpan);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    taskContainer.appendChild(task);
}

function startEditTask(task) {
    const input = document.getElementById('tf-input');
    const taskButton = document.getElementById('task-button');

    input.value = task.querySelector('span').textContent;
    taskButton.textContent = 'Edit Task';

    currentEditingTask = task;
}

function deleteTask(task) {
    task.remove();
}