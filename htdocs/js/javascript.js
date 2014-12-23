window.addEventListener('load', setGreetHeight, false);

var w = window.innerWidth;

if (w > 480) {
  window.addEventListener('scroll', set, false);
}

window.addEventListener('resize', setGreetHeight, false);
window.addEventListener('resize', display.chk, false);



function setGreetHeight() {
  var h = window.innerHeight;
  var greetEle = document.getElementById('greet');
  greetEle.style.height = h + "px";
}


function set() {
  display.setMulti("getLineId1", "getLineClass1", "setLine", 0.8, true);
  display.setMulti("getLineId2", "getLineClass2", "setLine", 0.8, false);

  display.setOne("getAnimationFloat", "setAnimationFloat", 0.7, true);
  display.setOne("getAnimationFloat2", "setAnimationFloat2", 0.8, true);
}