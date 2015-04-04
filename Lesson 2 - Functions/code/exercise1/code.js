(function (global) {
	var addManyValues;

	if (!global.UAM) {
		global.UAM = {};
	}

	addManyValues = function () {
		var argSum = 0;
		for(var i=0; i < arguments.length; i++){
			argSum += arguments[i];
		}
		return function(){
			var argSum2 = argSum;
			for(var i=0; i < arguments.length; i++){
				argSum2 += arguments[i];
			} 
			return argSum2;
		};
	};

	global.UAM.addManyValues = addManyValues;

}(window));

/*

Przykład użycia:

var addRest = UAM.addManyValues(2, 3);

addRest(1, 1, 3); // 10
addRest(3, 3); // 11
addRest(1, 1, 1, 1, 1); //10

var addOther = UAM.addManyValues(0, 10, 10);
addOther(10); // 30

*/
