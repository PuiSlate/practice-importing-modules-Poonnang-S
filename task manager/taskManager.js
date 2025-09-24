function addTask(tasks, task) {
    tasks.push(task);
    console.log(`\n("${task}" has been added to the list!)`);
}

function listTasks(tasks) {
    console.log("\nCurrent Tasks");
    tasks.forEach(task => console.log (task));
}

module.exports = {
    addTask,
    listTasks,
};