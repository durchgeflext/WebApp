var x = document.getElementById("div_stroke_results");
var active = false;

let acl = null;

var oldAz = 0;
var az = 0;
var counter = 0;

window.ondevicemotion = function(event) {
    az = event.acceleration.z;
    if(active) {
        countShakes(az);
    }
}


function startCounter() {
    startCount();
    setTimeout(stopCount, 10000);


    /*startBool = true;
    setTimeout(2000);
    startBool = false;
    x.innerHTML = "worked";*/

    /*setTimeout(10000);
    startBool = false;*/
    /*navigator.permissions.query({name: 'accelerometer'}).then(result => {
        if(result.state === 'denied') {
            x.innerHTML = "Permission Denied";
        }
    })
    acl = new Accelerometer({frequency: 60});
    acl.addEventListener('reading', () => {
        x.innerHTML = "Fucker" + acl.z;
    })
    acl.start();*/
}

function startCount() {
    counter = 0;
    active = true;
}

function stopCount() {
    active = false;
}

function countShakes(az) {
    if(Math.sign(oldAz) != Math.sign(az) && Math.sign(oldAz) != 0) {
        counter++;
    }
    oldAz = az;
    x.innerHTML = "Z = " + az + "<br>Count = " + counter;
}

