document.addEventListener("DOMContentLoaded", function () {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const taskText = taskInput.value.trim();

        // Create li element
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append li to ul
        taskList.appendChild(li);

        // Save tasks to local storage
        saveTasks();

        // Clear input field
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle("completed");

    // Save tasks to local storage
    saveTasks();
}

function removeTask(button) {
    const taskItem = button.parentNode;
    const taskList = taskItem.parentNode;
    taskList.removeChild(taskItem);

    // Save tasks to local storage
    saveTasks();
}

function saveTasks() {
    const taskList = document.getElementById("taskList");
    const tasks = taskList.innerHTML;
    localStorage.setItem("tasks", tasks);
}

function loadTasks() {
    const taskList = document.getElementById("taskList");
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        taskList.innerHTML = savedTasks;
    }
}
