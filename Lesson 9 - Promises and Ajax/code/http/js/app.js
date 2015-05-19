angular.module('app', []).controller('AppCtrl', function ($scope, $http) {
	$scope.results = [];

	$scope.clickElement = function (element) {
		$http.get('/elements/' + element.id).success(function(){
			element.count = (parseInt(element.count, 10) + 1).toString();
		});
	};

	$scope.loadData = function(){
		$http.get('/elements').success(function(data){
			$scope.results = data;
		});
	};
});
