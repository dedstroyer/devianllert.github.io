;(function() {

  document.addEventListener('DOMContentLoaded', createTimer);

  function createTimer() {
    const clock = document.createElement('div'),
          date = document.createElement('div'),
          time = document.createElement('div');

    clock.className = 'clock';
    date.className = 'clock-date';
    time.className = 'clock-time';

    clock.appendChild(date);
    clock.appendChild(time);

    document.body.appendChild(clock);

    function setClock() {
      let timeNow = new Date();
      let clock = {
        day: timeNow.getDate(),
        month: timeNow.getMonth() + 1, // Добавляем 1 потому что нумерация начинается с 0.
        year: timeNow.getFullYear(),
        second: timeNow.getSeconds(),
        minute: timeNow.getMinutes(),
        hour: timeNow.getHours(),
        update: function () {
          timeNow = new Date();
          this.day = timeNow.getDate();
          this.month = timeNow.getMonth() + 1; // Добавляем 1 потому что нумерация начинается с 0.
          this.year = timeNow.getFullYear();
          this.second = timeNow.getSeconds();
          this.minute = timeNow.getMinutes();
          this.hour = timeNow.getHours();
        }
      };

      setInterval(function () {
        clock.update();
        date.textContent = `${clock.day}.${clock.month}.${clock.year}`;
        time.textContent = `${clock.hour}:${clock.minute}:${clock.second}`;
      }, 1000);

    }

    setClock();

  }
}());