var x = document.getElementById("div_stroke_results");
var active = false;

var oldAz = 0;
var az = 0;
var counter = 0;

window.ondevicemotion = function(event) {
    if("Accelerometer" in window) {
        if (Math.abs(event.acceleration.z) > 2) {
            az = event.acceleration.z;
        } else {
            az = 0;
        }
        
        if(active) {
            countShakes(az);
        }
    } else {
        x.innerHTML = "NO ACCELEROMETER FOUND";
        return;
    }
}




function startCounter() {
    startCount();
    setTimeout(stopCount, 10000);
}

function startCount() {
    counter = 0;
    active = true;
}

function stopCount() {
    active = false;
}

function countShakes(az) {
    if((Math.sign(oldAz) != Math.sign(az)) && (Math.sign(oldAz) != 0 && Math.sign(az) != 0)) {
        counter++;
    }
    oldAz = az;
    x.innerHTML = "" + counter;
}

