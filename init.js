window.onload = function () {

  menu.startTime();// first run to be sure that there is no delay in current time
  setInterval (function(){
  menu.startTime();
  }, 1000);


};
menu.runGame();
