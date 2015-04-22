angular.module('myapp', []).directive('appSearchField', function () {
	return {
		restrict: 'E',
		scope: {
			queryValue: "=value"
		},
		controller: function ($scope, $element, $attrs) {
			$element[0].querySelector("button").addEventListener('click', function(){
				$scope.queryValue = '';
			});
		},
		templateUrl: 'templates/search_field.html'
	};
});


angular.module('myapp').controller('AppCtrl', function ($scope) {
	$scope.searchValue = '';
});
