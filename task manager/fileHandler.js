const fs = require('fs');

function saveTasks(filePath, tasksArray) {
    const jsonTasks = JSON.stringify(tasksArray);
    fs.writeFileSync(filePath, jsonTasks);
    console.log('\nTasks saved to file.');
}

function loadTasks(filePath) {
    if (fs.existsSync(filePath)) {
        //convert JSON to JS array and return it
    const jsonData = fs.readFileSync(filePath, 'utf8');
    let jsData = JSON.parse(jsonData);
     return jsData;
    } else {
        return [];
    }
    
    
}

module.exports = {
    saveTasks,
    loadTasks
};