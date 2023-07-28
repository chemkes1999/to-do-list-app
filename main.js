// Obtenemos referencias a los elementos del DOM
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Función para agregar una nueva tarea a la lista
function addTask(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Event listener para el formulario de agregar tarea
taskForm.addEventListener('submit', addTask);
