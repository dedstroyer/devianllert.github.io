;(function() {
  let timeNow = new Date(),
      day = timeNow.getDate(),
      month = timeNow.getMonth() + 1,
      year = timeNow.getFullYear(),
      second = timeNow.getSeconds(),
      minute = timeNow.getMinutes(),
      hour = timeNow.getHours();

  console.log(`${day}.${month}.${year} ${hour}:${minute}:${second}`);
}());