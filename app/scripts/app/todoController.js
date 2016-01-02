(function(){

	angular
		.module('app', ['ngMaterial', 'ngAnimate'])
		.controller('TodoController', ['$scope', TodoController]);

	function TodoController($scope) {

		var todo = this;
		todo.tasks = [];
		todo.incompleteTasks = [];
		todo.completedTasks = [];
		todo.addTask = addTask;
		todo.inputTask = "";
		todo.refreshTasks = refreshTasks;
		todo.showCompleted = false;
		todo.toggleCompletedTasks = toggleCompletedTasks;

		activate();

		function activate() {
			// Fill sample tasks
			todo.tasks = [
				{ text: "Wake up, work out!", completed: true },
				{ text: "Play chess with yourself", completed: false },
				{ text: "Stare at the mirror", completed: true },
				{ text: "Blink two times fast, and one slow", completed: false }
			];
			refreshTasks();
		}

		function refreshTasks() {
			todo.completedTasks = [];
			todo.incompleteTasks = [];
			todo.tasks.forEach(function(task, index, arr) {
				if (task.completed)
					todo.completedTasks.push(task);
				else
					todo.incompleteTasks.push(task);
			});
		}

		function addTask() {
			if (todo.inputTask) {
				console.log("Adding task: " + todo.inputTask);
				todo.tasks.push({ text: todo.inputTask, completed: false });
				refreshTasks();
				// Reset input to add new task
				todo.inputTask = "";
			}
		}

		function toggleCompletedTasks() {
			todo.showCompleted = !todo.showCompleted;
		}

	}

})();