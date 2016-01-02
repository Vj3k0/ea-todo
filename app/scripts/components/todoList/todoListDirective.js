(function(){

	angular
		.module('app')
		.directive('todoList', todoList);

	function todoList() {

		var directive = {
			scope: {
				tasks: "=",
				refreshTasks: "&"
			},
			templateUrl: 'scripts/components/todoList/todoListView.html',
			restrict: 'E'
		}

		return directive;
	}

})();