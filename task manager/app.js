const taskManager = require('./taskManager.js');
const {saveTasks, loadTasks} = require('./fileHandler.js');
const path = require('path');

// Build file path
const filePath = path.join(__dirname, 'task.json');
console.log(filePath);

// Load tasks from the file named tasks.json
let allTasksArray = loadTasks(filePath);
console.log(allTasksArray);

// 
// 
// taskManager.listTasks(tasks);

// Add new tasks to the list (JS array)
taskManager.addTask(allTasksArray, 'reading lesson');
taskManager.addTask(allTasksArray, 'practice lesson');
taskManager.addTask(allTasksArray, 'finish pending exercises');

 
// List all the tasks
taskManager.listTasks(allTasksArray);



// Save updated list back to the file
saveTasks(filePath, allTasksArray);