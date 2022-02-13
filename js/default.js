function showClock() {
    var nowTime = new Date();
    let nowYear = nowTime.getFullYear() 
    let nowMonth = (nowTime.getMonth() + 1) 
    let nowDate  = nowTime.getDate();
    let nowHour = nowTime.getHours();
    let nowMin  = nowTime.getMinutes();
    let nowSec  = nowTime.getSeconds();
    let msg = nowYear + "/" + nowMonth + "/" + nowDate + " " + nowHour + ":" + nowMin + ":" + nowSec;
    document.getElementById("realtime").innerHTML = msg;
  }
    setInterval('showClock()',10);

$(function() {
  $("#header").load("header.html");
  $("#side").load("side.html");
  $("#footer").load("footer.html");
});