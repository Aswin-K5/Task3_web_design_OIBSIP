const taskInput = document.getElementById("taskInput");
const pendingTasksList = document.getElementById("pendingTasks");
const completedTasksList = document.getElementById("completedTasks");
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") 
    return;
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div class="actions">
            <button class="complete" onclick="completeTask(this)">Complete</button>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}
function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector(".task-text");
    taskText.classList.toggle("completed");
    button.innerText = taskText.classList.contains("completed") ? "Undo" : "Complete";
    button.classList.toggle("undo");
    button.classList.toggle("complete");
    completedTasksList.appendChild(taskItem);
}
function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector(".task-text");
    const updatedTaskText = prompt("Edit task:", taskText.innerText);
    if (updatedTaskText !== null) {
        taskText.innerText = updatedTaskText;
    }
}
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
