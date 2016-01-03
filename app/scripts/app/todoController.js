(function(){

	angular
		.module('app', ['ngMaterial', 'ngAnimate'])
		.controller('TodoController', ['$scope', TodoController]);

	function TodoController($scope) {

		// List of bindable properties and methods
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

		/**
		 * Initialize sample controller data.
		 */
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

		/**
		 * Run through all tasks and see which are complete and which are not.
		 */
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

		/**
		 * Add new task to collection.
		 */
		function addTask() {
			// Only add task if something actually exists
			if (todo.inputTask) {
				console.log("Adding task: " + todo.inputTask);
				todo.tasks.push({ text: todo.inputTask, completed: false });
				refreshTasks();
				// Reset input to add new task
				todo.inputTask = "";
			}
		}

		/**
		 * Show or hide completed tasks.
		 */
		function toggleCompletedTasks() {
			todo.showCompleted = !todo.showCompleted;
		}

	}

})();