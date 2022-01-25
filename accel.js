
var az = 0;


window.ondevicemotion = function(event) { 
	az = event.accelerationIncludingGravity.z
	document.querySelector("#div_stroke_results").innerHTML = "Z = " + az;
}


function getAccel() {
    x.innerHTML = "bitch" + az;
}

