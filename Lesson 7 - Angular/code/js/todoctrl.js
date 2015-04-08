angular.module('myapp', []).controller('TodoCtrl', function ($scope) {
	$scope.elements = [];
	$scope.inputValue = '';
	$scope.total = 0;
	$scope.active = 0;

	$scope.addNew = function () {
		if (!$scope.inputValue) {
			return;
		}
		$scope.elements.push({
			value: $scope.inputValue,
			status: true
		});
		$scope.total++;
		$scope.active++;
		$scope.inputValue = '';
	};

	$scope.elementClicked = function($element){
		$scope.active += ($element.status) ? -1 : 1;
		$element.status = !$element.status;
	}

	$scope.deleteElement = function($element){
		var index = $scope.elements.indexOf($element);
		$scope.elements.splice(index, 1);
		if($element.status){
			$scope.active--;
		}
		$scope.total--;
	}
});
