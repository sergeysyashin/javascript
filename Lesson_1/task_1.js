
'use strict';

function fromCelsToFar(t) {
	return (((9/5) * t) + 32);
}	

var T = prompt("Введите температуру по Цельсию:")
alert(`Температура по Фаренгейту: ${fromCelsToFar(T)}`);