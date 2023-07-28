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

        // Creamos un botón para eliminar la tarea
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Agregamos el botón al elemento de la tarea
        taskItem.appendChild(deleteButton);

        // Agregamos la tarea a la lista
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

// Event listener para el formulario de agregar tarea
taskForm.addEventListener('submit', addTask);