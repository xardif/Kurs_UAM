angular.module('myapp', []).directive('appSearchField', function () {
	return {
		restrict: 'E',
		scope: {
			queryValue: "=value",
			clear: "&"
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
