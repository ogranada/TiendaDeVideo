


function getData(cb){
    var request = new XMLHttpRequest();
    request.open('GET', 'http://ogranada.github.io/videotienda/data.json');

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            var data = JSON.parse(request.responseText);
            if(!!cb) cb(data);
        } else {
            // We reached our target server, but it returned an error
        }
    };

    request.onerror = function() {
    // There was a connection error of some sort
    };

    request.send();
}

function inicio(){
	getData(cargarDatosAPagina);
}

$(document).ready(inicio);







////////////////////////////////////////////
//               IMPORTANTE               //
////////////////////////////////////////////


function cargarDatosAPagina(data){
    for(i in data){
        var dato = data[i];
        console.log("Dato "+i+":", dato);
    }
}








