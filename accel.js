
var az = 0;


window.ondevicemotion = function(event) { 
	az = event.acceleration.z
	//document.querySelector("#div_stroke_results").innerHTML = "Z = " + az;
}


function getAccel() {
    document.querySelector("#div_stroke_results").innerHTML = "bitch" + az;
}

