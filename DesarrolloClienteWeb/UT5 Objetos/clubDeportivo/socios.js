var clubDeportivo = new Array();

function Socio(nSocioV, dniV, nombreV, apellidoV, nacimientoV, localidadV) {
    this.nSocio = nSocioV;
    this.dni = dniV;
    this.nombre = nombreV;
    this.apellido = apellidoV;
    this.nacimiento = nacimientoV;
    this.localidad = localidadV;

    this.setLocalidad = function (valor) {
        this.localidad = valor;
    };
}

var socioDos=new Socio(1,1,"Enrique",1,"1995","Logroño");
clubDeportivo.push(socioDos);
var socioTres=socioDos;

clubDeportivo.push(socioTres);
socioTres.setLocalidad("Alberite");


function addSocio() {
    var nSocio = document.getElementById("nSocio").value;
    var dni = document.getElementById("dni").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nacimiento = document.getElementById("nacimiento").value;
    var localidad = document.getElementById("localidad").value;

    var socioTemp = new Socio(nSocio, dni, nombre, apellido, nacimiento, localidad);
    clubDeportivo.push(socioTemp);

    var cadena = "";
    cadena += "<table>";
    cadena += "<tr>";
    cadena += "<th>Numero de Socio</th>";
    cadena += "<th>DNI</th>";
    cadena += "<th>Nombre</th>";
    cadena += "<th>Apellido</th>";
    cadena += "<th>Nacimiento</th>";
    cadena += "<th>Localidad</th>";
    cadena += "<th>Categoria</th>";
    cadena += "</tr>";

    cadena += "<tr>";
    cadena += "<td>" + nSocio + "</td>";
    cadena += "<td>" + dni + "</td>";
    cadena += "<td>" + nombre + "</td>";
    cadena += "<td>" + apellido + "</td>";
    cadena += "<td>" + nacimiento + "</td>";
    cadena += "<td>" + localidad + "</td>";
    cadena += "<td>" + calculaCategoria(nacimiento) + "</td>";
    cadena += "</tr>";

    cadena += "</table>"
    document.getElementById("notificaciones").innerHTML = cadena;


}

function deleteSocio() {
    var numeroSocio = document.getElementById("nSocio").value;

    for (i = 0; i < clubDeportivo.length; i++) {
        if (clubDeportivo[i].nSocio == numeroSocio) {
            clubDeportivo.splice(i, 1);
            break;
        }
    }
}

function mostarSocios() {
    var cadena = "";
    cadena += "<table>";
    cadena += "<tr>";
    cadena += "<th>Numero de Socio</th>";
    cadena += "<th>DNI</th>";
    cadena += "<th>Nombre</th>";
    cadena += "<th>Apellido</th>";
    cadena += "<th>Nacimiento</th>";
    cadena += "<th>Localidad</th>";
    cadena += "<th>Categoria</th>";
    cadena += "</tr>";
    for (i = 0; i < clubDeportivo.length; i++) {
        cadena += "<tr>";
        cadena += "<td>" + clubDeportivo[i].nSocio + "</td>";
        cadena += "<td>" + clubDeportivo[i].dni + "</td>";
        cadena += "<td>" + clubDeportivo[i].nombre + "</td>";
        cadena += "<td>" + clubDeportivo[i].apellido + "</td>";
        cadena += "<td>" + clubDeportivo[i].nacimiento + "</td>";
        cadena += "<td>" + clubDeportivo[i].localidad + "</td>";
        cadena += "<td>" + calculaCategoria(clubDeportivo[i].nacimiento) + "</td>";
        cadena += "</tr>";
    }
    cadena += "</table>"
    document.getElementById("notificaciones").innerHTML = cadena;
}

function modificarLocalidad() {
    var nSocio = document.getElementById("nSocio").value;
    var localidad = document.getElementById("localidad").value;

    for (i = 0; i < clubDeportivo.length; i++) {
        if (clubDeportivo[i].nSocio == numeroSocio) {
            clubDeportivo[i].setLocalidad(localidad);
            alert(clubDeportivo[i].localidad());
            break;
        }
    }
}

function buscarPorDni() {
    var dni = document.getElementById("dni").value;
    for (i = 0; i < clubDeportivo.length; i++) {
        if (clubDeportivo[i].dni == dni) {
            document.getElementById("notificaciones").innerHTML = clubDeportivo[i].toString();
            break;
        }
    }
}

function calculaCategoria(ano) {
    var dato = ano.substring(0, 4);
    if (dato < 1995) {
        return "Adulto";
    } else if (dato > 1994 && dato < 1999) {
        return "Sub-22";
    } else if (dato > 1998 && dato < 2003) {
        return "Juvenil";
    } else {
        return "Infantil";
    }
}

function buscarPorCategoria() {
    var cadena = "";
    var categoria = document.getElementById("categoria").value;

    for (i = 0; i < clubDeportivo.length; i++) {
        if (calculaCategoria(clubDeportivo[i].nacimiento) == categoria) {
            cadena += clubDeportivo[i].toString() + "<br>";
        }
    }
    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function buscarPorLocalidad() {
    var localidad = document.getElementById("localidad").value;
    var localidad = document.getElementById("localidad").value;
    for (i = 0; i < clubDeportivo.length; i++) {
        if (clubDeportivo[i].localidad == localidad) {
            document.getElementById("notificaciones").innerHTML = clubDeportivo[i].toString();
            break;
        }
    }
}

function altaAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Alta nuevo Socio</h2>";
    cadena += "<label >Numero de socio</label><input id='nSocio' type='text' /><br>";
    cadena += "<label >Numero de DNI</label><input id='dni' type='text' /><br>";
    cadena += " <label >Nombre de socio</label><input id='nombre' type='text' /><br>";
    cadena += "<label >Apellido de socio</label><input id='apellido' type='text' /><br>";
    cadena += "<label >Nacimiento de socio(SOLO Añio)</label><input id='nacimiento' type='number' /><br>";
    cadena += "<label >Localidad del socio</label><input id='localidad' type='text' /><br>";
    cadena += "<input type='button' value='Alta' onclick='addSocio()'>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function bajaAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Baja de un Socio</h2>";
    cadena += "<label >Numero de socio</label><input id='nSocio' type='text' /><br>";
    cadena += "<input type='button' value='Alta' onclick='deleteSocio()'>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function modificarLocalidadAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Modificar Localidad de un Socio</h2>";
    cadena += "<label >Numero de socio</label><input id='nSocio' type='text' /><br>";
    cadena += "<label >Localidad del socio</label><input id='localidad' type='text' /><br>";
    cadena += "<input type='button' value='Alta' onclick='deleteSocio()'>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function BuscarPorDniAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Buscar Socio por DNI</h2>";
    cadena += "<label >Numero de DNI</label><input id='dni' type='text' /><br>";
    cadena += "<input type='button' value='Alta' onclick='buscarPorDni()'>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function BuscarPorLocalidadAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Buscar Socio por Localidad</h2>";
    cadena += "<label >Localidad del socio</label><input id='localidad' type='text' /><br>";
    cadena += "<input type='button' value='Alta' onclick='buscarPorLocalidad()'>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}

function BuscarPorCategoriaAreaTrabajo() {
    var cadena = "";
    cadena += "<h2>Buscar Socios por Categoria</h2>";
    cadena += " <select name='categoria' form='carform'>";
    cadena += "<option value='adulto'>Adulto</option><option value='sub-22'>Sub-22</option> <option value='juvenil'>Juvenil</option><option value='infantil'>Infantil</option>";
    cadena += " </select>";

    document.getElementById("areaTrabajo").innerHTML = cadena;
}