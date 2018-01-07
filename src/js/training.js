'use strict';

/*
let позволяет устанавливать видимость только в том блоке кода, в котором
она создана
*/


// FOR TRAINING PAGE
window.onload = function () {

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
      if (classes[i] === cls) {
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
  });

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
    });

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
  }
  nowDate();

  // Обычный вывод даты
  function lastDate() {
    console.log(new Date(2012, 1, 20, 3, 12, 0))
  }
  lastDate();

  // вывод дня недели (сокращенный)
  function getDay(time) {
    let day = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

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
    let lastDay = new Date(year, month + 1, 0);
    console.log(lastDay.getDate())


  }

  getLastDayOfMonth(2012, 1);

  // Сколько секунл прошло с начала сегодняшнего дня
  function getSecondsToday() {
    let nowTime = new Date();
    let firstTime = new Date().setHours(0, 0, 0, 0);
    console.log(Math.round((nowTime - firstTime) / 1000 / 60 / 60) + ' часов прошло с начала дня');
  }

  getSecondsToday();

  // сколько секунд осталось до конца днгя
  function getSecondsToTomorrow() {
    let nowTime = new Date();
    let firstTime = new Date().setHours(0, 0, 0, 0);
    let allSecondDay = 24;
    console.log(Math.round((allSecondDay - ((nowTime - firstTime) / 1000 / 60 / 60))) + ' часов осталось до конца дня');
  }

  getSecondsToTomorrow();

  // Форматирование времени (по типу постов в вк)
  function formatDate(date) {
    let diff = new Date() - date, // Разница в миллисекундах
      sec = Math.floor(diff / 1000),
      min = Math.floor(sec / 60),
      hour = Math.floor(min / 60),
      day = Math.floor(hour / 24),
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

  /*  Замыкание – это функция вместе со всеми внешними переменными, которые ей доступны.
    Таково стандартное определение, которое есть в Wikipedia и большинстве серьёзных источников по программированию. То есть, замыкание – это функция + внешние переменные.
    Тем не менее, в JavaScript есть небольшая терминологическая особенность.
    Обычно, говоря «замыкание функции», подразумевают не саму эту функцию, а именно внешние переменные.
    Иногда говорят «переменная берётся из замыкания». Это означает – из внешнего объекта переменных.
    Что это такое – «понимать замыкания?»
    Иногда говорят «Вася молодец, понимает замыкания!». Что это такое – «понимать замыкания», какой смысл обычно вкладывают в эти слова?

    «Понимать замыкания» в JavaScript означает понимать следующие вещи:

    Все переменные и параметры функций являются свойствами объекта переменных LexicalEnvironment.
    Каждый запуск функции создает новый такой объект. На верхнем уровне им является «глобальный объект», в браузере – window.
    При создании функция получает системное свойство [[Scope]], которое ссылается на LexicalEnvironment, в котором она была создана.
    При вызове функции, куда бы её ни передали в коде – она будет искать переменные сначала у себя, а затем во внешних LexicalEnvironment с места своего «рождения».
    В следующих главах мы углубим это понимание дополнительными примерами, а также рассмотрим, что происходит с памятью.
  */

  // Замыкания

  function makeCounter() {
    let currentCount = 1;

    function counter() {
      return currentCount++;
    }

    counter.set = function (value) {
      currentCount = value;
    };

    counter.reset = function () {
      currentCount = 1;
    };

    return counter;
  }

  let counter = makeCounter();

  console.log(counter());
  console.log(counter());
  counter.set(5);
  console.log(counter());
  console.log(counter());
  counter.reset();
  console.log(counter());

  // Функции через замыкания

  function sumClosure(a) {
    return function sumB(b) {
      return a + b;
    }
  }

  console.log(sumClosure(2)(3));


  function makeBuffer() {
    let message = '';

    function addString(string) {
      if (arguments.length == 0) {
        return message;
      }
      message += string + ' ';
    };
    addString.reset = function () {
      message = 'Пусто';
    };

    return addString;

  }

  let buffer = makeBuffer();
  buffer('league');
  buffer('of');
  buffer('legends');
  console.log(buffer());
  buffer.reset();
  console.log(buffer());

  let users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];

  function byField(field) {
    return function (a, b) {
      return a[field] > b[field] ? 1 : -1
    }
  }

  users.sort(byField('name'));
  users.forEach(function (user) {
    console.log(user.name);
  });

  users.sort(byField('age'));
  users.forEach(function (user) {
    console.log(user.age);
  });

  let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function filterSort(arr, func) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (func(val)) {
        result.push(val)
      }
    }

    return result;
  }

  function inArray(arr) {
    return function (x) {
      return arr.indexOf(x) != -1
    }
  }

  function inBetween(a, b) {
    return function (x) {
      return x >= a && x <= b;
    }
  }

  console.log(filterSort(arrNum, inBetween(3, 5)));

  function makeArmy() {

    let shooters = [];

    for (let i = 0; i < 10; i++) {
      let shooter = function () { // функция-стрелок
        console.log(i); // выводит свой номер
      };
      shooters.push(shooter);
    }

    return shooters;
  }

  let army = makeArmy();

  army[0](); // стрелок выводит 10, а должен 0
  army[5](); // стрелок выводит 10...
  // .. все стрелки выводят 10 вместо 0,1,2...9


  /*
    Для очистки памяти от недостижимых значений в браузерах используется автоматический
    Сборщик мусора (англ. Garbage collection, GC), встроенный в интерпретатор, который
    наблюдает за объектами и время от времени удаляет недостижимые.
    Самая простая ситуация здесь с примитивами. При присвоении они копируются целиком,
    ссылок на них не создаётся, так что если в переменной была одна строка, а её заменили
    на другую, то предыдущую можно смело выбросить.
    Именно объекты требуют специального «сборщика мусора», который наблюдает за ссылками,
    так как на один объект может быть много ссылок из разных переменных и, при перезаписи
    одной из них, объект может быть всё ещё доступен из другой.
  */

  // контекст - this;

  let user = {
    firstName: "Василий",

    export: this // Будет тоже самое что и window, т.к. нет никаких функций, которые могли бы повлиять на контекст.
  };

  console.log( user.export.firstName); // undefined

  let user2 = {
    firstName: "Василий",

    export: function () {
      return this
    } // this ведет на текущий обьект user2
  };

  console.log( user2.export().firstName); // Василий.


  // prompt calculator;
  let calculator = {
    read: function () {
      this.first = 5; //+prompt('Введите первое число', '');
      this.second = 5; //+prompt('Введите второе число', '');
      return this;
    },
    sum: function () {
      console.log(this.first + this.second);
      return this;
    },
    mul: function () {
      console.log(this.first * this.second);
      return this;
    }
  };

  calculator.read().sum().mul();

  // Ступеньки
  let ladder = {
    step: 0,
    up: function() { // вверх по лестнице
      this.step++;
      return this; // Чтобы можно было последовательно делать вызовы функций.
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      console.log( this.step );
      return this;
    }
  };
  ladder.up().up().up().showStep();

  function sumTwoVer(a) {
    let num = a;
    function sum(b) {
      num += b;
      return sum;
    }
    sum.toString = function () {
      return num;
    };
    return sum;
  }
  console.log(sumTwoVer(3)(2)(5)(5));

  //Дескрипторы, геттеры и сеттеры свойств

  let defineProp = {
    name: 'Vayne',
    type: 'range',
    mod: 'adc'
  };

  Object.defineProperty(defineProp, "person", {
    // value: undefined, // значение свойства, по умолчанию undefined
    // configurable: true, // значение свойства можно менять, если true. По умолчанию false.
    // writable: true, // если true, то свойство можно удалять, а также менять его в дальнейшем при помощи новых вызовов defineProperty. По умолчанию false.
    // enumerable: true, // если true, то свойство просматривается в цикле for..in и методе Object.keys(). По умолчанию false.
    get: function () {
      return this.name + ' ' + this.type + ' ' + this.mod;
    }, // функция, которая возвращает значение свойства. По умолчанию undefined.
    set: function (value) {
      let fullClass = value.split(' ');
      this.name = fullClass[0];
      this.type = fullClass[1];
      this.mod = fullClass [2];
    } // функция, которая записывает значение свойства. По умолчанию undefined.
  });

  console.log(defineProp.name);
  defineProp.person = "Kalista range adc";
  console.log(defineProp.name);

  let lunch = {
    drink: 'coca-cola',
    food: 'fastfood',
    get fullLunch() {
      return this.food + ' ' + this.drink;
    }
  };
  console.log(Object.keys(lunch));
  /* Object.keys возвращает только enumerable-свойства.
     Object.getOwnPropertyNames – возвращает все
     Object.getOwnPropertyDescriptor(obj, prop) - Возвращает дескриптор для свойства obj[prop].
     Object.preventExtensions(obj) - Запрещает добавление свойств в объект.
     Object.seal(obj) - Запрещает добавление и удаление свойств, все текущие свойства делает configurable: false.
     Object.freeze(obj) - Запрещает добавление, удаление и изменение свойств, все текущие свойства делает configurable: false, writable: false.
     Object.isExtensible(obj) - Возвращает false, если добавление свойств объекта было запрещено вызовом метода Object.preventExtensions.
     Object.isSealed(obj) - Возвращает true, если добавление и удаление свойств объекта запрещено, и все текущие свойства являются configurable: false.
     Object.isFrozen(obj) - Возвращает true, если добавление, удаление и изменение свойств объекта запрещено, и все текущие свойства являются configurable: false, writable: false.
  */
  
  function User(fullName) {
    this.fullName = fullName;

    Object.defineProperties(this, {

      firstName: {
        get: function () {
          return this.fullName.split(' ')[0]
        },
        set: function (newFirstName) {
          this.fullName = newFirstName + ' ' + this.lastName;
        }
      },
      lastName: {
        get: function () {
          return this.fullName.split(' ')[1]
        },
        set: function (newLastName) {
          this.fullName = this.firstName + ' ' + newLastName;
        }
      }

    })
  }
  let userName = new User("Василий Попкин");
  console.log(userName.fullName);
  userName.firstName = 'Руслан';
  userName.lastName = 'Поволоцкий';
  console.log(userName.fullName);

  function Calculator() {
    let methods = {
      '+': function (a, b) {
        return a + b;
      },
      '-': function (a, b) {
        return a - b;
      }
    };
    this.calculate = function (str) {
      let a = +str.split(' ')[0];
      let operation = str.split(' ')[1];
      let b = +str.split(' ')[2];
      if (!methods[operation] || isNaN(a) || isNaN(b)) {
        console.warn('Проверьте правильность введенных данных!');
        return false;
      }
      return methods[operation](a, b);
    };
    this.addMethod = function (method, func) {
      methods[method] = func;
    }
  }

  let calc = new Calculator();
  console.log(calc.calculate('2 + 5'));
  calc.addMethod('*', function (a, b) {
    return a * b;
  });
  calc.addMethod('/', function (a, b) {
    return a / b;
  });
  calc.addMethod('^', function (a, b) {
    return Math.pow(a, b);
  });
  console.log(calc.calculate('2 ^ 5'));

  // Явное указание this: "call", "apply"

  // Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context).
  function showADC(name, mod) {
    console.log(this[name] + ' - ' + this[mod]);
  }
  let myADC = {
    name: 'Vayne',
    mod: 'adc',
    range: 'range'
  };
  showADC.call(myADC, 'name', 'range');

  function sumArgs() {
    if(!arguments.length) {
      console.log(0);
      return false;
    }
    arguments.reduce = [].reduce;
    return arguments.reduce(function (a, b) {
      return a + b;
    });
  }
  console.log(sumArgs(2, 5, 5));
};