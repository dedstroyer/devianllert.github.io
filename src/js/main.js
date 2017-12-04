'use strict';

/*
let позволяет устанавливать видимость только в том блоке кода, в котором
она создана
*/


// FOR TRAINING PAGE

function hidePreolader() {
	document.body.style.overflow = 'visible';
	document.body.style.marginRight = '0';
	document.querySelector('#preloader').style.opacity = '0';
	document.querySelector('#loader').style.marginRight = '0';
	document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
	document.querySelector('.back').classList.add('animated', 'fadeInUp');
	document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
	setTimeout(function () {
		document.querySelector('#preloader').style.display = 'none';
		console.log('Прелоадер сработал');
	}, 500);
}

window.onload = function () {
	// Если на странице есть блок прелоадера, то выполняем действия ниже и
	// добавляем классы анимации только после слайдера
	if (!!document.querySelector('#preloader')) {
		setTimeout(hidePreolader(), 2000);
	} else { // Если блока нет, то сразу же добавляем классы анимации
		document.body.style.overflow = 'visible';
		document.querySelector(".header-title").classList.add('animated', 'fadeInUp');
		document.querySelector('.back').classList.add('animated', 'fadeInUp');
		document.querySelector('.header-logo').classList.add('animated', 'fadeInLeft');
	}

	// Вывод подсказок
	let hint = document.querySelectorAll(".hint");

	for (let h = 0; h < hint.length; h++) {

		hint[h].onclick = function () {

			let step = this.closest(".train").querySelector(".block-hint");

			step.classList.toggle("active-hint");

		};
	}

	// Функция суммы
	let sum = document.querySelector(".sum .btn");
	sum.onclick = function () {

		let a = +(document.querySelector(".sum .first").value),
			b = +(document.querySelector(".sum .second").value),
			answer = document.querySelector(".sum .answer"),
			result;

		if (isNaN(a) || isNaN(b)) { // Проверка введения чисел
			alert('Введите числа в оба столбца');
		} else {

			result = a + b;
			answer.innerHTML = +result.toFixed(2); // Для дробных - округляем числа до 2 цифр после запятой

		}

	};

	// Фукция умножеия
	let multi = document.querySelector(".multi .btn");
	multi.onclick = function () {

		let a = +(document.querySelector(".multi .first").value),
			b = +(document.querySelector(".multi .second").value),
			answer = document.querySelector(".multi .answer"),
			result;

		if (isNaN(a) || isNaN(b)) {
			alert('Введите числа в оба столбца');
		} else {

			result = a * b;
			answer.innerHTML = +result.toFixed(2);

		}


	};

	// Функция деления
	let divis = document.querySelector(".divis .btn");
	divis.onclick = function () {

		let a = +(document.querySelector(".divis .first").value),
			b = +(document.querySelector(".divis .second").value),
			answer = document.querySelector(".divis .answer"),
			result;

		if (isNaN(a) || isNaN(b)) {
			alert('Введите числа в оба столбца');
		} else {
			result = a / b;

			answer.innerHTML = +result.toFixed(5);

		}

	};

	// Функция возведения в степень
	let pow = document.querySelector(".pow .btn");
	pow.onclick = function () {

		let a = +(document.querySelector(".pow .first").value),
			b = +(document.querySelector(".pow .second").value),
			answer = document.querySelector(".pow .answer"),
			result = a;

		if (isNaN(a) || isNaN(b)) { // Проверка
			alert('Введите числа в оба столбца');
		} else {
			if (b > 0) { // Если степень положительная, то
				for (let h = b; h > 1; h--) {
					result *= a;
				}
			} else { // Если отрицательная то считаем уже по-другому
				for (let h = b; h < 1; h++) {
					result *= ((1 / a)); // Счет может быть не точным
				}

			}
			answer.innerHTML = +result.toFixed(5);
		}


	};

	// Дескриминант
	let discriminant = document.querySelector(".discriminant .btn");
	discriminant.onclick = function () {
		let a = +(document.querySelector(".discriminant .first").value),
			b = +(document.querySelector(".discriminant .second").value),
			c = +(document.querySelector(".discriminant .third").value),
			answer = document.querySelector(".discriminant .answer");

		answer.innerHTML = (b * b) - 4 * a * c;
	};

	// Числа Фибоначчи
	let fibonacci = document.querySelector(".fibonacci .btn");
	fibonacci.onclick = function () {
		let a = +(document.querySelector(".fibonacci .first").value),
			answer = document.querySelector(".fibonacci .answer"),
			k = 1,
			j = 1;

		for (let i = 3; i <= a; i++) {
			let result = k + j;
			k = j;
			j = result;

		}

		answer.innerHTML = j;
	};

	// Факториал числа
	let factorial = document.querySelector(".factorial .btn");
	factorial.onclick = function () {
		let a = +(document.querySelector(".factorial .first").value),
			answer = document.querySelector(".factorial .answer"),
			result = a;

		for (let i = 1; i < a; i++) {

			result *= (a - i);
		}

		answer.innerHTML = result;
	};

	//Счет чисел до ...
	let sumTo = document.querySelector(".sum-to .btn");
	sumTo.onclick = function () {
		let a = +(document.querySelector(".sum-to .first").value),
			answer = document.querySelector(".sum-to .answer"),
			result = a;

		for (let i = 1; i < a; i++) {

			result += (a - i);
		}

		answer.innerHTML = result;
	};

	// Работа со строками
	function upperCaseChar(str) {
		// str.charAt(0).toUpperCase() Возвращает первый символ в строке
		// str.slice(1) Возвращает все символы после первого
		let newStr = str.charAt(0).toUpperCase() + str.slice(1);

		console.log(newStr);

	}
	upperCaseChar("devianllert");

	function reverseString(string) {
		// Разбиваем строку на символы в массиве - переворачиваем массив - превращаем в строку
		console.log(string.split("").reverse().join(""));
	}
	reverseString('Devianllert');
	// Проверка на спам
	function checkSpam(str) {
		let newStr = str.toLowerCase();
		if (~newStr.indexOf('viagra') || ~newStr.indexOf('xxx')) {
			console.log('Это спам!');
		} else {
			console.log('Это не спам!');
		}
	}
	checkSpam('xxqxxqwexxxx');

	// Усечение строки
	function truncate(str, maxlength) {

		console.log('Длина строки ' + str.length + ' символов, стоит ограничение в ' + maxlength + ' символов');

		if (str.length > maxlength) {
			console.log(str.slice(0, (maxlength - 3)) + '...'); // Возвращает строку от 0 символа, до (maxlength -3)
		}

	}
	truncate('lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem', 20);


	// Работа с обьектами и массивами

	let person = {
		name: 'Руслан Поволоцкий',
		age: '18',
		profession: 'Front-end developer',
		size: {
			top: '30px',
			left: '30px'
		}
	};

	let personw = {}; // Пустой

	console.log('Я ' + person.name + ' мне ' + person.age + ' лет и моя профессия ' + person.profession);

	for (let key in person) {
		console.log('Значение - ' + key + ' содержит ' + person[key]);
	}

	function emptyObject(objectName) {
		let counter = 0;

		for (let key in objectName) {
			counter++;
		}

		if (counter == 0) {
			console.log('Объект пуст!');
		} else {
			console.log(counter + ' свойств');
		}
	}
	// personw.name = 'gight'; можно указать пустому обьекту свойство
	emptyObject(person);
	emptyObject(personw);

	// Обьект с зарплатами
	let salary = {
		'jinx': '9000',
		'vayne': '12000',
		'tristana': '8500'
	};

	// Считаем сумму зарплат работников
	function allSalary(objectName) {
		let sum = 0;

		for (let key in objectName) {
			sum += +objectName[key];
		}

		console.log(sum);
	}
	allSalary(salary);

	// Вычисляем макс зарплату
	function maxSalary(objectName) {
		let max = 0,
			maxName = '',
			counter = 0;

		for (let key in objectName) {
			counter++;

			if (max < +objectName[key]) {
				max = objectName[key];
				maxName = key;
			}
		}

		if (counter == 0) {
			console.log('Нет сотрудников!');
		} else {
			console.log(maxName + ' - является сотрудником с макс. зарплатой');
		}
	}
	maxSalary(salary);

	// Код с codewars
	// function solution(number){
	//   let step = 0;
	//
	//   for(let i = 0; i < number; i++) {
	//
	//     if ((i % 3) == 0 || (i % 5) == 0){
	//       step += i;
	//       )
	//     }
	//
	//   }
	// }

	// Массивы

	let fruits = ['Яблоко', 'Груша', 'Арбуз', 'Апельсин'],
		fruitsLength = fruits.length; // 4

	// Массив с рандомными значениями до 10
	function randomMassive() {
		function compareNum(a, b) {
			return a - b;
		}

		let massive = [], // создаем пустой массив
			randomLength = Math.floor(Math.random() * 10 + 2);

		for (let i = 0; i < randomLength; i++) {
			let randomNum = Math.floor(Math.random() * 10);
			massive.push(randomNum); // Генерируем новый массив
		}

		massive.sort(compareNum);

		console.log('Рандомный отсортированный массив ' + massive + ' ... его длина ' + randomLength);
	}
	randomMassive();

	// Генератор паролей
	function generateRandomPassword(length) {
		let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
				'h', 'i', 'j', 'k', 'l', 'm', 'n',
				'o', 'p', 'q', 'r', 's', 't', 'u',
				'v', 'w', 'x', 'y', 'z'
			],
			password = '';

		for (let i = 0; i < length; i++) {
			let randomChar = Math.floor(Math.random() * alph.length);

			password += alph[randomChar];
		}

		console.log('Ваш новый пароль - ' + password);
	}
	generateRandomPassword(5);

	// Сортировка методом sort()
	function sortArray(array) {

		// Создаем доп функцию, которая позволит методу sort()
		// сортировать массивы не как строки, а как числа
		function compareNum(a, b) {
			return a - b;
		}
		array.sort(compareNum); // Сортируем, используя предыдущую функцию

	}

	// Concat на es6
	function concatArray(length) {
		let array = [],
			arrayTwo = [];

		for (let i = 0; i < length; i++) {
			let random = Math.floor(Math.random() * 10),
				randomTwo = Math.floor(Math.random() * 10);

			array.push(random); // Генерируем первый массив
			arrayTwo.push(randomTwo); // Генерируем второй массив
		}

		console.log(array, arrayTwo);

		let newConcatArray = [...array, ...arrayTwo]; // Обьединяем их с помощью spread operator (ES6)
		sortArray(newConcatArray);
		console.log(newConcatArray);
	}
	concatArray(5);

	// Добавить класс в строку 
	let objClass = {
		className: 'is-active open open'
	};

	function addClass(obj, cls) {
		let classes;
		if (obj.className) {
			classes = obj.className.split(" ")
		}

		for (let i = 0; i < classes.length; i++) {
			if (classes[i] == cls) {
				console.log('Такой класс уже есть в наборе классов =>');
				console.log(obj.className);
				return false;
			}
		}

		classes.push(cls);

		obj.classList = classes.join(" ");

		console.log('Класс ' + cls + ' добавлен')
	};

	addClass(objClass, 'nav');

	// превратить свойства типа border-right в borderRight
	function camelize(prop) {
		let camelizeProp = prop.split('-');

		for (let i = 1; i < camelizeProp.length; i++) {
			camelizeProp[i] = camelizeProp[i].charAt(0).toUpperCase() + camelizeProp[i].slice(1);
		}

		prop = camelizeProp.join('');

		console.log(prop);
	}
	camelize('margin-bottom');

	// Удаление классов из обьекта
	function removeClass(obj, cls) {
		let classes;
		if (obj.className) {
			classes = obj.className.split(" ")
		}

		for (let i = 0; i < classes.length; i++) {
			if ((classes[i] == cls)) {
				classes.splice(i, 1);
				i--; // (*)
			}
		}
		/*В примере выше есть тонкий момент. Элементы массива проверяются один за другим. При вызове splice удаляется текущий, 
		i-й элемент, и те элементы, которые идут дальше, сдвигаются на его место.
		Таким образом, на месте i оказывается новый, непроверенный элемент.
		Чтобы это учесть, строчка  уменьшает i, чтобы следующая итерация цикла заново 
		проверила элемент с номером i. Без нее функция будет работать с ошибками.*/

		obj.classList = classes.join(" ");
		console.log(obj.classList);
	};
	removeClass(objClass, 'open');

	let filter = [5, 4, 1, 6, 2, 3, 9, 7, 8];

	// Фильтер значений массива
	function filterRange(array, a, b) {

		for (let i = 0; i < array.length; i++) {
			let filterValue = array[i];

			if (!(filterValue <= b && filterValue >= a)) {
				array.splice(i--, 1);
			}
		}

		console.log('Фильтер массива ' + array);
	}

	filterRange(filter, 1, 5);

	// Случайный порядок в массиве

	let randomSort = [1, 2, 3, 4, 5];

	function randomSortArray(a, b) {
		// Выяснить почему 0.5
		return (Math.random() - 0.5)
	}

	console.log('Случайный порядок в массиве ' + randomSort.sort(randomSortArray));


	// Сортировка объектов

	let kalista = {
		name: 'kalista',
		class: 'ranger',
		dps: 1700
	};
	let lucian = {
		name: 'lucian',
		class: 'ranger',
		dps: 2000
	};
	let draven = {
		name: 'draven',
		class: 'ranger',
		dps: 2900
	};

	let rangers = [lucian, kalista, draven];

	function rangersDps(array) {

		function rangerSort(rangerA, rangerB) {
			return rangerB.dps - rangerA.dps;
		}

		array.sort(rangerSort);

		for (let i = 0; i < array.length; i++) {
			console.log(array[i].name + ' ' + array[i].dps + ' dps')
		}
	};
	rangersDps(rangers);

	// Вывести односвязный список
	let list = {
		value: 1
	};
	list.next = {
		value: 2
	};
	list.next.next = {
		value: 3
	};
	list.next.next.next = {
		value: 4
	};

	// Циклом
	function printList(listItem) {
		let tmp = listItem;
		while (tmp) {
			console.log(tmp.value);
			tmp = tmp.next;
		}
	};
	printList(list);
	// Рекурсией
	function printListRecurs(listItem) {
		console.log(listItem.value);

		if (listItem.next) {
			printListRecurs(listItem.next)
		}
	};

	printListRecurs(list);


	// Работа с массивами с помощью перебирающих методов
	let arrMap = ['name', 'class', 'type', 'prop'];

	let arrMapLength = arrMap.map(function (name) {
		return name.length
	})

	console.log(arrMapLength);

	// Массив частичных сумм

	let arrSum = [1, 2, 3, 4, 5];

	function getArrSum(array) {
		let newArr = [];
		if (!array.length) {
			return newArr;
		}

		let totalArr = array.reduce(function (sum, item) {
			newArr.push(sum);
			return sum + item;
		})

		/* Если вы его запустите, то обнаружите, что результат не совсем тот. 
		В получившемся массиве всего четыре элемента, отсутствует последняя сумма.
		Это из-за того, что последняя сумма является результатом метода reduce, он 
		на ней заканчивает проход и далее функцию не вызывает, поэтому она оказывается 
		не добавленной в newArr. */

		newArr.push(totalArr);

		console.log(newArr);
	}

	getArrSum(arrSum);

	// Псевдомассив аргументов "arguments"

	function testPseudoArg(a, b) {
		console.log(`a = ${a} b = ${b}`); // ES6 шаблонные строки
	}
	testPseudoArg(8, 0);

	function pseudoArg() {
		for (let i = 0; i < arguments.length; i++) {
			console.log(`Hi, ${arguments[i]}`)
		}
	}
	pseudoArg('Vayne', 'Leona');

	// Клонирование обьектов из списка аргументов
	let vayne = {
		class: 'adc',
		sex: 'female',
		damage: 'high'
	};
	let leona = {
		class: 'supp',
		sex: 'female',
		damage: 'low'
	};

	function copy(dst) {
		for (let i = 0; i < arguments.length; i++) {
			let arg = arguments[i];
			for (let key in arg) {
				dst[key] = arg[key];
			}
		}
		console.log(dst)
	};

	copy(vayne);

	function showWarn(width, height, content) { // Это отлично работает в тех ситуациях, когда «нормальное» при передаче  на значение по умолчанию.
		width = width || 200; // значение параметра в логическом контексте отлично от false. В коде выше, 
		height = height || 150; // width = 0 или width = null, оператор ИЛИ заменит его
		content = content || 'Контента пока нет!';
	};

	function ifShowWarn(width, height, content) {
		if (width === undefined) width = 200;
		if (height === undefined) height = 150;
		if (content === undefined) content = 'Контента пока нет!';
	};

	function sumArg() {
		let sum = 0;
		for (let i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}
		console.log(sum)
	};
	sumArg(2, 5, 3, 15);

	function likeUndefined(x) {
		if (arguments.length) {
			console.log('Все в порядке')
		} else {
			console.warn('Вы не передали аргументы!')
		}
	};
	likeUndefined(undefined);
	likeUndefined();

	// Работа со временем в js == new Date(year, month, date, hours, minutes, seconds, ms)

	function nowDate() {
		let date = new Date();
		let options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			weekday: 'long',
			timezone: 'UTC',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		};
		console.log(date.toLocaleString('ru', options));
	};
	nowDate();
	// Обычный вывод даты
	function lastDate() {
		console.log(new Date(2012, 1, 20, 3, 12, 0))
	};
	lastDate();

	// вывод дня недели (сокращенный)
	function getDay(time) {
		let day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

		console.log(day[time.getDay()])
		console.log(time.toLocaleString('ru', {
			weekday: 'short'
		}))
	};
	getDay(new Date(2012, 0, 3));

	// Получение кол-ва дней назад
	function getDayAgo(date, days) {
		let lastDate = date;
		lastDate.setDate(date.getDate() - days);
		
		console.log(lastDate);
	};
	getDayAgo(new Date(2015, 0, 2), 1);

	// Получение последней даты месяца

	function getLastDayOfMonth(year, month) {
		let lastDay = new Date(year, month+1, 0);
		console.log(lastDay.getDate())


	}
	getLastDayOfMonth(2012, 1);

	// Сколько секунл прошло с начала сегодняшнего дня
	function getSecondsToday() {
		let nowTime = new Date();
		let firstTime = new Date().setHours(0, 0, 0, 0);
		console.log(Math.round((nowTime - firstTime)/1000/60/60) + ' часов прошло с начала дня');
	}
	getSecondsToday();

	// сколько секунд осталось до конца днгя
	function getSecondsToTomorrow() {
		let nowTime = new Date();
		let firstTime = new Date().setHours(0, 0, 0, 0);
		let allSecondDay = 24;
		console.log(Math.round((allSecondDay - ((nowTime - firstTime)/1000/60/60))) + ' часов осталось до конца дня');
	}
	getSecondsToTomorrow();

	// Форматирование времени (по типу постов в вк)
	function formatDate(date) {
		let diff = new Date() - date, // Разница в миллисекундах
			sec = Math.floor(diff/1000),
			min = Math.floor(sec/60),
			hour = Math.floor(min/60),
			day = Math.floor(hour/24),
			textField;

		if (sec <= 60) {
			textField = 'только что';
		}
	
		if (sec > 60) {
			textField = `${min} мин. назад`;
		}

		if (min > 60) {
			textField = `${hour} ч. назад`
		}

		if (hour > 24) {
			textField = `${day} д. назад`
		}

		console.log(textField);

	}
	formatDate((new Date() - (16 * 24 * 60 * 60 * 1000)));
};