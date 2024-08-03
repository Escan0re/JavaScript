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

const newTask = {
    tasks: [{
        title: 'Оплатить парковку',
        id: 1,
        description: 'описание',
        priority: 1,
    }],

}
const addNewTask = function (taskTitle, taskPriority, taskDescription) {
    const newTask = {
        title: taskTitle,
        id: this.tasks.length + 1,
        priority: taskPriority,
        description: taskDescription
    };
    this.tasks.push(newTask);
}.bind(newTask);

const removeNewTask = toDoList.removeTask.bind(newTask);
const updateNewTask = toDoList.updateTask.bind(newTask);
const sortNewTasksByPriority = toDoList.sortTasksByPriority.bind(newTask);


toDoList.addTask('Выполнить задачу 1', 2);
toDoList.addTask('Выполнить задачу 2', 3);
console.log(toDoList.tasks);

toDoList.removeTask(2);
console.log(toDoList.tasks);

toDoList.updateTask(3, 'Прочитать Clean Code', 1);
console.log(toDoList.tasks);

toDoList.sortTasksByPriority();
console.log(toDoList.tasks);


addNewTask('Выпить кофе', 6, 'описание 1');
addNewTask('Помыть посуду', 4, 'описание 2');
addNewTask('Решить домашнее задание', 5,'описание 3');
console.log(newTask);
removeNewTask(2);
console.log(newTask);
updateNewTask(3, 'Отдохнуть', 10);
console.log(newTask);
sortNewTasksByPriority();
console.log(newTask);