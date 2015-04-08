angular.module('myapp').controller('MyCtrl', ["$scope", "clearService", function ($sc, clearService) {
	$sc.name = "Gucio";

	$sc.clear =	function(){
		clearService.clear($sc, "name");
	}
}]);




angular.module('myapp').factory('clearService', function () {
  return {
		clear: function (scope, variable) {
			scope[variable] = '';
		}
  };
});
