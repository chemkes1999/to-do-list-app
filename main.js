// Obtenemos referencias a los elementos del DOM
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Función para agregar una nueva tarea a la lista
function addTask(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerText = taskText;

    // Creamos un botón para eliminar la tarea
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Eliminar";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
    });

    // Agregamos el botón al elemento de la tarea
    taskItem.appendChild(deleteButton);

    // Agregamos la tarea a la lista
    taskList.appendChild(taskItem);
    taskInput.value = "";
    mostrarAlertaSucces();
  } else {
    mostrarAlertaError();
  }

  function mostrarAlertaSucces() {
    Swal.fire({
      title: "Tarea agregada",
      text: "Se ha agregado la tarea.",
      icon: "success",
      confirmButtonText: "Ok",
    });
  }

  function mostrarAlertaError() {
    Swal.fire({
      title: "¡Error!",
      text: "No puede estar vacio el nombre de la tarea.",
      icon: "error", // Cambiamos el icono a 'error'
      confirmButtonText: "Ok",
    });
  }
}

// Event listener para el formulario de agregar tarea
taskForm.addEventListener("submit", addTask);

// Función para exportar las tareas como una tabla en formato CSV
function exportTasksToCSV() {
  const tasks = Array.from(taskList.getElementsByTagName("li"));
  const csvContent =
    "data:text/csv;charset=utf-8," +
    tasks.map((task) => task.innerText).join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "tasks.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Crear el botón de exportar
const exportButton = document.createElement("button");
exportButton.innerText = "Exportar CSV";
exportButton.addEventListener("click", exportTasksToCSV);
exportButton.classList.add("export-button"); // Agregamos la clase 'export-button' al botón

// Agregamos el botón al contenedor #app
document.getElementById("app").appendChild(exportButton);
