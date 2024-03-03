let tasks = [];

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    displayTasks();
    taskInput.value = '';
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function editTask(index) {
  const newTask = prompt('Enter new task:', tasks[index]);
  if (newTask !== null && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    displayTasks();
  }
}

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span onclick="removeTask(${index})">&#10006;</span>
      <span onclick="editTask(${index})">&#9998;</span>
      ${task}
    `;
    taskList.appendChild(li);
  });
}

displayTasks();
