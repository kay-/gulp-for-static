window.onload = function () {
  setGreetHeight();
  changeMenu();
};

var w = window.innerWidth;

<<<<<<< HEAD
if (w > 568) {
=======
if (w > 480) {
>>>>>>> FETCH_HEAD
  window.onscroll = function() {
    visibl.set("getLine1", "setLine", 0.9, true);
    visibl.set("getLine2", "setLine", 0.9, true);
    visibl.set("getLine3", "setLine", 0.9, false);
    visibl.set("getLine4", "setLine", 0.9, false);
    visibl.set("getAnimationFloat", "setAnimationFloat", 0.7, true);
    visibl.set("getAnimationFloat2", "setAnimationFloat2", 0.8, true);
  };
}


window.onresize = function() {

  setGreetHeight();
  visibl.chk();
  changeMenu();
};

function setGreetHeight() {
  var h = window.innerHeight;
  var greetEle = document.getElementById('greet');
  greetEle.style.height = h + "px";
}

function changeMenu() {
  var elem = document.getElementById('menu-elements');
  var w = window.innerWidth;

  if (w <= 568) {
    elem.classList.add('pure-menu-horizontal');
  } else {
      elem.classList.remove('pure-menu-horizontal');
  }
}