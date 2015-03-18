window.addEventListener('DOMContentLoaded', function () {	
	var inputs = document.querySelectorAll('input');

	inputChangeEventAction = function(e){
		var input = e.target;
		var parent = e.target.parentElement;
		var span = parent.querySelector('span');

		span.textContent = input.value;
	};

	bmiRefreshEventAction = function(){
		var height = document.querySelector('.height span').textContent;
		var weight = document.querySelector('.weight span').textContent;

		var bmiSpan = document.querySelector('h1 span');
		var bmiVal = (weight / Math.pow(height/100,2)).toFixed(2);
		bmiSpan.textContent = bmiVal;
		
		if(bmiVal>=19 && bmiVal<=25)
			bmiSpan.setAttribute('class', 'ok');
		else if(bmiVal>=17 && bmiVal<=30)
			bmiSpan.setAttribute('class', 'medium');
		else
			bmiSpan.setAttribute('class', 'bad');

	};

	Array.prototype.forEach.call(inputs, function(element){
		element.addEventListener('click', inputChangeEventAction, false);
		element.addEventListener('click', bmiRefreshEventAction, false);
		element.click();
	});

});
