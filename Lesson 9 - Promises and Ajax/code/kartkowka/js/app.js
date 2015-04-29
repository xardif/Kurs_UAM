angular.module('myapp', []).controller('CarCtrl', ["$scope", function ($scope) {
  $scope.additions = [];

  $scope.add = function(){
    $scope.additions.push({
      color: "",
      option: ""
    });
  };
}]);

angular.module('myapp').directive('carAddition', function () {
	return {
		restrict: 'E',
		scope: {
			param: "="
		},
		templateUrl: 'templates/addition.html',
    link: function ($scope, $element, $attrs) {
      $scope.options = ["Spoiler", "Progi boczne", "Lusterka", "Felgi"];

      $scope.updateColor = function($color){
        $scope.param.color = $color;
      };

		}
	};
});
