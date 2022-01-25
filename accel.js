var x = document.getElementById("div_stroke_results");
var startBool = false;

let acl = null;
var az;

window.ondevicemotion = function(event) {
    az = event.acceleration.z;
    if(startBool) {
        x.innerHTML = "Z = " + az;
    }
}


function startCounter() {

    setInterval(countShakes, 10000);


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

function countShakes() {
    x.innerHTML = "Z = " + az;
}

