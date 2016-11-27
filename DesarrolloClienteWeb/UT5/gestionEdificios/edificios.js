var edificios = new Array();

function addEdificio() {
    var calle = document.getElementById("calle").value;
    var numero = document.getElementById("numero").value;
    var cp = document.getElementById("cp").value;


    var estructuraO = new Object();
    estructuraO.nPlantas = 0;
    estructuraO.nPuertas = 0;
    estructuraO.puertas = new Array();

    var edificio = {
        calle: calle,
        numero: numero,
        cp: cp,
        estructura: estructuraO
    };
    edificios.push(edificio);
    document.getElementById("notificaciones").innerHTML = "Construido el edificio en la calle: " + edificio.calle + ",Nº: " + edificio.numero + ",CP: " + edificio.cp;
    /* La forma larga de hacer objetos
 
        var socio = new Object();
        socio.numSocio = document.getElementById("numSocio").value;
        socio.dni = document.getElementById("numSocio").value;
        socio.nombre = document.getElementById("numSocio").value;
*/
}

function addPlantasYPuertas() {
    var identificador = document.getElementById("numeroEdificioPlantasYPuertas").value;
    var nPlantas = document.getElementById("numeroPlantas").value;
    var nPuertas = document.getElementById("numeroPuertas").value;

    //Método que añadira n numero de plantas y por cada planta n Puertas

    var estructuraO = new Object();
    estructuraO.nPlantas = nPlantas;
    estructuraO.nPuertas = nPuertas;
    estructuraO.puertas = new Array();

    for (i = 0; i < edificios.length; i++) {
        if (edificios[i].numero == identificador) {
            edificios[i].estructura = estructuraO;
            break;
        }
    }

}

function addPropietario() {
    var identificador = document.getElementById("numeroEdificioParaAddPropietario").value;
    var planta = document.getElementById("plantaParaAddPropietario").value;
    var puerta = document.getElementById("puertaParaAddPropietario").value;
    var propietario = document.getElementById("propietarioParaAddPropietario").value;

    var puertaO = {
        planta: planta,
        puerta: puerta,
        propietario: propietario
    };

    for (i = 0; i < edificios.length; i++) {
        if (edificios[i].numero == identificador) {
            edificios[i].estructura.puertas.push(puertaO);
			 document.getElementById("notificaciones").innerHTML = propietario+" es ahora propietario del " + edificios[i].calle + ",Nº: " +  edificios[i].numero + ",CP: " +  edificios[i].cp;
			break;
        }
    }
	


}


function changeNumeroEdificio() {
	 var identificador = document.getElementById("numeroEdificioParaModificaciones").value;
	 var numeroNuevo = document.getElementById("numeroNuevo").value;
	for (i = 0; i < edificios.length; i++) {
        if (edificios[i].numero == identificador) {
            edificios[i].numero=numeroNuevo;
			 document.getElementById("notificaciones").innerHTML ="Numero cambiado";
			break;
        }
    }
}

function changeNombreCalle() {
	 var identificador = document.getElementById("numeroEdificioParaModificaciones").value;
	 var calleNueva = document.getElementById("calleNueva").value;
	for (i = 0; i < edificios.length; i++) {
        if (edificios[i].numero == identificador) {
            edificios[i].calle=calleNueva;
			 document.getElementById("notificaciones").innerHTML ="Calle cambiada";
			break;
        }
    }
}

function changeCP(cp) {
	 var identificador = document.getElementById("numeroEdificioParaModificaciones").value;
	 var cpNuevo = document.getElementById("cpNuevo").value;
	for (i = 0; i < edificios.length; i++) {
        if (edificios[i].numero == identificador) {
            edificios[i].cp=cpNuevo;
			 document.getElementById("notificaciones").innerHTML ="CP cambiado";
			break;
        }
    }
}


function mostrar() {
    var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "Construido el edificio en la calle: " + edificios[i].calle + ",Nº: " + edificios[i].numero + ",CP: " + edificios[i].cp + "<br>";
        cadena = cadena + "";
    }
    document.getElementById("notificaciones").innerHTML = cadena;
}

function mostrarTodo() {
    var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "Identificativo : " + edificios[i].numero + " ,Calle :" + edificios[i].calle + " ,CP: " + edificios[i].cp + " ,nPlantas: " + edificios[i].estructura.nPlantas + " ,nPuertas: " + edificios[i].estructura.nPuertas + "<br>";
        cadena = cadena + "Puertas con sus propietarios: <br> ";

        for (j = 0; j < edificios[i].estructura.puertas.length; j++) {

            cadena = cadena + "Planta: " + edificios[i].estructura.puertas[j].planta + "Puerta: " + edificios[i].estructura.puertas[j].puerta + "Propietario:  " + edificios[i].estructura.puertas[j].propietario + "<br>";
        }
    }


    document.getElementById("notificaciones").innerHTML = cadena;

}

function printCalle() {
 var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "Construido el edificio en la calle: " + edificios[i].calle + ",Nº: " + edificios[i].numero + ",CP: " + edificios[i].cp + "<br>";
        cadena = cadena + "";
    }
    document.getElementById("notificaciones").innerHTML = cadena;
}

function printCalle() {
	 var identificador = document.getElementById("numeroEdificioParaLosPrintv").value;
	var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "Calle--> "+edificios[i].calle + "<br>";
        cadena = cadena + "";
    }
    document.getElementById("notificaciones").innerHTML = cadena;
}

function printCP() {
	 var identificador = document.getElementById("numeroEdificioParaLosPrintv").value;
	var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "CP--> "+edificios[i].cp + "<br>";
        cadena = cadena + "";
    }
    document.getElementById("notificaciones").innerHTML = cadena;
}

function printPlantas() {
	 var identificador = document.getElementById("numeroEdificioParaLosPrintv").value;
	var cadena = "";
    for (var i = 0; i < edificios.length; i++) {
        cadena = cadena + "Calle--> "+edificios[i].estructura.nPlantas  + "<br>";
        cadena = cadena + "";
    }
    document.getElementById("notificaciones").innerHTML = cadena;
}