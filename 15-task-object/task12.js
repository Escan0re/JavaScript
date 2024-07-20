const toDoList = {
    tasks: [{
        title: 'Помыть посуду',
        id: 1,
        priority: 4,
    }],
    addTask: function (taskTitle, taskPriority) {
        const newTask = {
            title: taskTitle,
            id: Object.keys(this.tasks).length + 1,
            priority: taskPriority,
        }
        this.tasks.push(newTask);
    },
    removeTask: function (taskId) {
        return this.tasks = this.tasks.filter((task) => task.id !== taskId);
    },
    updateTask: function (taskId, taskTitle, taskPriority) {
        const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].title = taskTitle;
            this.tasks[taskIndex].priority = taskPriority;
        }
    },
    sortTasksByPriority: function () {
        this.tasks.sort((a, b) => a.priority - b.priority);
    }
}


toDoList.addTask('Выполнить задачу 1', 2);
toDoList.addTask('Выполнить задачу 2', 3);
console.log(toDoList.tasks);

toDoList.removeTask(2);
console.log(toDoList.tasks);

toDoList.updateTask(3, 'Прочитать Clean Code', 1);
console.log(toDoList.tasks);

toDoList.sortTasksByPriority();
console.log(toDoList.tasks);
