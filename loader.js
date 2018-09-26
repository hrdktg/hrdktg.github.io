var wcTxt="Welcome"
var speed=150;
var i=0;

function typeEffect() {
	if(i < wcTxt.length) {
		document.getElementById("wcTxt").innerHTML += wcTxt[i];
    i++;
    setTimeout(typeEffect, speed);
  }
}

function checkState() {
	switch(document.readyState) {
    case "loading":
    	document.getElementById("txt").innerHTML = "Loading Site///";
    	break;
  	case "complete":
    	typeEffect();
      document.getElementById("txt").innerHTML += "Complete.";
    	break;
  }
}
