
var operationButtons = document.getElementsByClassName('operation-buttons');

var inputFirst = document.getElementById('firstNum');
var inputSecond = document.getElementById('secondNum');


function makeOperation(operationCode) {
	var firstNumber = Number(inputFirst.value);
	var secondNumber = Number(inputSecond.value);

	if (operationCode === '+') {
		var result = firstNumber + secondNumber;
	}
	else if (operationCode === '-') {
		var result = firstNumber - secondNumber;
	}
	else if (operationCode === '*') {
		var result = firstNumber * secondNumber;
	}
	else if (operationCode === '/') {
		var result = firstNumber / secondNumber;
	}
	else if (operationCode === 'pow') {
		var result = Math.pow(firstNumber, secondNumber);
	}
	else {
		result = "&";
	}
	return alert(result);

}

function onButtonClick(eventObject) {
	var clickedElement = eventObject.currentTarget;
	var operation = clickedElement.innerHTML;
	makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
	operationButtons[i].addEventListener('click', onButtonClick);
}











