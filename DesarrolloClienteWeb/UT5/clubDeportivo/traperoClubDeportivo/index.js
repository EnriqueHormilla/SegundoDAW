var array = new Array();

function alta() {
    if (comprobarNumeroSocio(document.getElementById("numSocio").value) == false) {
        var socio = {
            numSocio: document.getElementById("numSocio").value,
            dni: document.getElementById("dni").value,
            nombre: document.getElementById("nombre").value,
            apellidos: document.getElementById("apellidos").value,
            fecha: document.getElementById("fecha").value,
            localidad: document.getElementById("localidad").value
        };

        var error = "";
        var comprobar = true;

        if (socio.numSocio.length == 0) {
            error = "Numero de socio\n";
            comprobar = false;
        }
        if (socio.dni.length == 0) {
            error = error + "DNI\n";
            comprobar = false;
        }
        if (socio.nombre.length == 0) {
            error = error + "Nombre\n";
            comprobar = false;
        }
        if (socio.apellidos.length == 0) {
            error = error + "Apellidos\n";
            comprobar = false;
        }
        if (socio.fecha.length == 0) {
            error = error + "Fecha de nacimiento\n";
            comprobar = false;
        }
        if (socio.localidad.length == 0) {
            error = error + "Localidad\n";
            comprobar = false;
        }

        if (comprobar) {
            alert("Socio añadido");
            array.push(socio);
            document.getElementById("numSocio").value = "";
            document.getElementById("dni").value = "";
            document.getElementById("nombre").value = "";
            document.getElementById("apellidos").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("localidad").value = "";
        } else {
            alert("Faltan los siguientes datos:\n" + error);
        }
    } else {
        alert("Ya existe un socio con ese número");
        document.getElementById("numSocio").value = "";
    }
}


function comprobarNumeroSocio(num) {
    var socio = num;
    var numero = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].numSocio == socio) {
            numero = true;
            break;
        }
    }
    return numero;
}

function mostrar() {
    var ventana = window.open("", "", "width=700 height=400");
    ventana.document.write("<style type='text/css'>td{padding: 5px}</style>")
    ventana.document.write("<table>");
    ventana.document.write("<thead style='font-weight: bold'>");
    ventana.document.write("<tr>");
    ventana.document.write("<td>Numero socio</td><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Fecha Nacimiento</td><td>Localidad</td><td>Categoría</td>");
    ventana.document.write("</tr>");
    ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
    ventana.document.write("</thead>");
    for (i = 0; i < array.length; i++) {
        ventana.document.write("<tr>");
        ventana.document.write("<td>" + array[i].numSocio + "</td>");
        ventana.document.write("<td>" + array[i].dni + "</td>");
        ventana.document.write("<td>" + array[i].nombre + "</td>");
        ventana.document.write("<td>" + array[i].apellidos + "</td>");
        ventana.document.write("<td>" + array[i].fecha + "</td>");
        ventana.document.write("<td>" + array[i].localidad + "</td>");
        ventana.document.write("<td>" + calculaCategoria(array[i].fecha) + "</td>");
        ventana.document.write("</tr>");
        ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
    }
    ventana.document.write("</table>");
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

function selecionarBuscador() {
    var una = document.getElementById("buscarNumero");
    var dos = document.getElementById("buscarNombre");
    var tres = document.getElementById("buscarCategoria");
    var cuatro = document.getElementById("buscarLocalidad");
    var select = document.getElementById("bNumero");
    var select2 = document.getElementById("bCategoria");
    var select3 = document.getElementById("bLocalidad");

    if (select.checked) {
        una.style.display = 'block';
        dos.style.display = 'none';
        tres.style.display = 'none';
        cuatro.style.display = 'none';
    } else if (select2.checked) {
        una.style.display = 'none';
        dos.style.display = 'none';
        tres.style.display = 'block';
        cuatro.style.display = 'none';
    } else if (select3.checked) {
        una.style.display = 'none';
        dos.style.display = 'none';
        tres.style.display = 'none';
        cuatro.style.display = 'block';
    } else {
        una.style.display = 'none';
        dos.style.display = 'block';
        tres.style.display = 'none';
        cuatro.style.display = 'none';
    }
}

function buscarSocio() {
    if (document.getElementById("bNumero").checked) {
        if (document.getElementById("bNumSocio").value.length == 0) {
            alert("Falta el número del socio");
        } else {
            var numeroSocio = document.getElementById("bNumSocio").value;
            var opc = false;
            var num;

            for (var i = 0; i < array.length; i++) {
                if (array[i].numSocio == numeroSocio) {
                    num = i;
                    opc = true;
                    break;
                }
            }

            if (opc) {
                var ventana = window.open("", "", "width=700 height=400");
                ventana.document.write("<style type='text/css'>td{padding: 5px}</style>")
                ventana.document.write("<table>");
                ventana.document.write("<thead style='font-weight: bold'>");
                ventana.document.write("<tr>");
                ventana.document.write("<td>Numero socio</td><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Fecha Nacimiento</td><td>Localidad</td><td>Categoría</td>");
                ventana.document.write("</tr>");
                ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                ventana.document.write("</thead>");
                ventana.document.write("<tr>");
                ventana.document.write("<td>" + array[num].numSocio + "</td>");
                ventana.document.write("<td>" + array[num].dni + "</td>");
                ventana.document.write("<td>" + array[num].nombre + "</td>");
                ventana.document.write("<td>" + array[num].apellidos + "</td>");
                ventana.document.write("<td>" + array[num].fecha + "</td>");
                ventana.document.write("<td>" + array[num].localidad + "</td>");
                ventana.document.write("<td>" + calculaCategoria(array[num].fecha) + "</td>");
                ventana.document.write("</tr>");
                ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                ventana.document.write("</table>");
            } else {
                alert("No existe un socio con ese número");
            }
            document.getElementById("bNumSocio").value = "";
        }
    }

    if (document.getElementById("bNombreYApe").checked) {
        if (document.getElementById("bNombre").value.length == 0 || document.getElementById("bApellidos").value.length == 0) {
            alert("Falta el nombre o los apellidos del socio");
        } else {
            var nombreSocio = document.getElementById("bNombre").value;
            var apellidoSocio = document.getElementById("bApellidos").value;
            var opc = false;
            var num;

            for (var i = 0; i < array.length; i++) {
                if (array[i].nombre == nombreSocio) {
                    if (array[i].apellidos == apellidoSocio) {
                        num = i;
                        opc = true;
                        break;
                    }
                }
            }

            if (opc) {
                var ventana = window.open("", "", "width=700 height=400");
                ventana.document.write("<style type='text/css'>td{padding: 5px}</style>")
                ventana.document.write("<table>");
                ventana.document.write("<thead style='font-weight: bold'>");
                ventana.document.write("<tr>");
                ventana.document.write("<td>Numero socio</td><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Fecha Nacimiento</td><td>Localidad</td><td>Categoría</td>");
                ventana.document.write("</tr>");
                ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                ventana.document.write("</thead>");
                ventana.document.write("<tr>");
                ventana.document.write("<td>" + array[num].numSocio + "</td>");
                ventana.document.write("<td>" + array[num].dni + "</td>");
                ventana.document.write("<td>" + array[num].nombre + "</td>");
                ventana.document.write("<td>" + array[num].apellidos + "</td>");
                ventana.document.write("<td>" + array[num].fecha + "</td>");
                ventana.document.write("<td>" + array[num].localidad + "</td>");
                ventana.document.write("<td>" + calculaCategoria(array[num].fecha) + "</td>");
                ventana.document.write("</tr>");
                ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                ventana.document.write("</table>");
            } else {
                alert("No existe un socio con ese nombre y esos apellidos");
            }
            document.getElementById("bNombre").value = "";
            document.getElementById("bApellidos").value = "";
        }
    }
    if (document.getElementById("bCategoria").checked) {
        var categoria = document.getElementById("categoriaSocio").value;
        var opc = false;

        for (i = 0; i < array.length; i++) {
            if (categoria == calculaCategoria(array[i].fecha)) {
                opc = true;
                break;
            }
        }

        if (opc) {
            var ventana = window.open("", "", "width=700 height=400");
            ventana.document.write("<style type='text/css'>td{padding: 5px}</style>")
            ventana.document.write("<table>");
            ventana.document.write("<thead style='font-weight: bold'>");
            ventana.document.write("<tr>");
            ventana.document.write("<td>Numero socio</td><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Fecha Nacimiento</td><td>Localidad</td><td>Categoría</td>");
            ventana.document.write("</tr>");
            ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
            ventana.document.write("</thead>");
            for (i = 0; i < array.length; i++) {
                if (categoria == calculaCategoria(array[i].fecha)) {
                    ventana.document.write("<tr>");
                    ventana.document.write("<td>" + array[i].numSocio + "</td>");
                    ventana.document.write("<td>" + array[i].dni + "</td>");
                    ventana.document.write("<td>" + array[i].nombre + "</td>");
                    ventana.document.write("<td>" + array[i].apellidos + "</td>");
                    ventana.document.write("<td>" + array[i].fecha + "</td>");
                    ventana.document.write("<td>" + array[i].localidad + "</td>");
                    ventana.document.write("<td>" + calculaCategoria(array[i].fecha) + "</td>");
                    ventana.document.write("</tr>");
                    ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                }
            }
            ventana.document.write("</table>");
        } else {
            alert("No hay socios con esa categoria");
        }
    }
    if (document.getElementById("bLocalidad").checked) {
        if (document.getElementById("bLocalidadSocio").value.length == 0) {
            alert("Falta localidad");
        } else {
            var localidad = document.getElementById("bLocalidadSocio").value;
            var opc = false;
            for (var i = 0; i < array.length; i++) {
                if (array[i].localidad == localidad) {
                    opc = true;
                    break;
                }
            }

            if (opc) {
                var ventana = window.open("", "", "width=700 height=400");
                ventana.document.write("<style type='text/css'>td{padding: 5px}</style>")
                ventana.document.write("<table>");
                ventana.document.write("<thead style='font-weight: bold'>");
                ventana.document.write("<tr>");
                ventana.document.write("<td>Numero socio</td><td>DNI</td><td>Nombre</td><td>Apellidos</td><td>Fecha Nacimiento</td><td>Localidad</td><td>Categoría</td>");
                ventana.document.write("</tr>");
                ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                ventana.document.write("</thead>");
                for (i = 0; i < array.length; i++) {
                    if (array[i].localidad == localidad) {
                        ventana.document.write("<tr>");
                        ventana.document.write("<td>" + array[i].numSocio + "</td>");
                        ventana.document.write("<td>" + array[i].dni + "</td>");
                        ventana.document.write("<td>" + array[i].nombre + "</td>");
                        ventana.document.write("<td>" + array[i].apellidos + "</td>");
                        ventana.document.write("<td>" + array[i].fecha + "</td>");
                        ventana.document.write("<td>" + array[i].localidad + "</td>");
                        ventana.document.write("<td>" + calculaCategoria(array[i].fecha) + "</td>");
                        ventana.document.write("</tr>");
                        ventana.document.write("<tr><td colspan='7'><hr></td></tr>");
                    }
                }
                ventana.document.write("</table>");
            } else {
                alert("No existe un socio con esa localidad");
            }
            document.getElementById("bLocalidadSocio").value = "";
        }
    }
}

function selecionarBuscadorBorrar() {
    var una = document.getElementById("buscarDni");
    var dos = document.getElementById("buscarNumSocio");
    var tres = document.getElementById("buscarLocalidadM");
    var select = document.getElementById("bDni");
    var select2 = document.getElementById("bLocalidadM");

    if (select.checked) {
        una.style.display = 'block';
        dos.style.display = 'none';
        tres.style.display = 'none';
    } else if (select2.checked) {
        una.style.display = 'none';
        dos.style.display = 'none';
        tres.style.display = 'block';
    } else {
        una.style.display = 'none';
        dos.style.display = 'block';
        tres.style.display = 'none';
    }
}

function buscarSocioBorrar() {
    if (document.getElementById("bDni").checked) {
        if (document.getElementById("bDniB").value.length == 0) {
            alert("Falta el DNI");
        } else {
            var dnid = document.getElementById("bDniB").value;
            var opc = false;
            var num;

            for (var i = 0; i < array.length; i++) {
                if (array[i].dni == dnid) {
                    num = i;
                    opc = true;
                    break;
                }
            }

            if (opc) {
                array.splice(num, 1);
                alert("Borrado el socio con el DNI " + dnid);
            } else {
                alert("No existe un socio con el DNI " + dnid);
            }
            document.getElementById("bDniB").value = "";
        }
    }
    if (document.getElementById("bNumSocioB").checked) {
        if (document.getElementById("bNumeroB").value.length == 0) {
            alert("Falta el número de socio");
        } else {
            var numb = document.getElementById("bNumeroB").value;
            var opc = false;
            var num;

            for (var i = 0; i < array.length; i++) {
                if (array[i].numSocio == numb) {
                    num = i;
                    opc = true;
                    break;
                }
            }

            if (opc) {
                array.splice(num, 1);
                alert("Borrado el socio con el número de socio " + numb);
            } else {
                alert("No existe un socio con el número de socio " + numb);
            }
            document.getElementById("bNumeroB").value = "";
        }
    }
    if (document.getElementById("bLocalidadM").checked) {
        if (document.getElementById("bNumeroMo").value.length == 0 || document.getElementById("bLocalidadMo").value.length == 0) {
            alert("Falta el número de socio o la localidad");
        } else {
            var numero = document.getElementById("bNumeroMo").value;
            var localidad = document.getElementById("bLocalidadMo").value;
            var opc = false;
            var num;

            for (i = 0; i < array.length; i++) {
                if (numero == array[i].numSocio) {
                    opc = true;
                    num = i;
                    break;
                }
            }

            if (opc) {
                array[num].localidad = localidad;
                alert("Modificada la localidad del socio " + numero);
            } else {
                alert("No existe un socio con esa localidad");
            }

            document.getElementById("bNumeroMo").value = "";
            document.getElementById("bLocalidadMo").value = "";
        }
    }
}