var x = document.getElementById("div_stroke_results");
var startBool = false;

let acl = null;

window.ondevicemotion = function(event) {
    var az = event.acceleration.z;
    if(startBool) {
        x.innerHTML = "Z = " + az;
    }
}


function startCounter() {
    startBool = true;
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

