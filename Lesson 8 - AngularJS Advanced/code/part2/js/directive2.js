angular.module('myapp', []).directive('appSearchField', function () {
	return {
		restrict: 'E',
		scope: {
			queryValue: "=value",
			clear: "&"
		},
		controller: function ($scope, $element, $attrs) {
			$element[0].querySelector("button").addEventListener('click', $scope.clear);
		},
		templateUrl: 'templates/search_field.html'
	};
});


angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = '';
	$scope.clear = function() {
		$scope.searchValue = '';
	};
});
