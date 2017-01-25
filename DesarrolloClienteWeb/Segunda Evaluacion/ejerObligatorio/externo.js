/**************************************************************************
Mediante el evento onload, nos aseguramos de que cuando todos los 
  elementos del formulario estén cargados se llamará a la función iniciar
**************************************************************************/
window.onload = iniciar;

/**************************************************************
Asignamos los eventos: de click para el botón enviar
  y de pérdida de foco para los inputs nombre y apellidos.
***************************************************************/
function iniciar() {

    //---ASIGNAR LOS EVENTOS MEDIANTE EL METODO addEventListener


    // Al hacer click en el botón de enviar tendrá que llamar a la la función validar que se encargará
    // de validar el formulario.
    // Cuando se pierda el foco de nombre o apellidos se llamará a la función convertirMayusculas.
    // Los eventos de click y de perder el foco lo programamos en la fase de burbujeo (false).

    document.getElementById("enviar").addEventListener('click', validar, false);
    document.getElementById("nombre").addEventListener('focusout', convertirMayusculas);
    document.getElementById("apellidos").addEventListener('focusout', convertirMayusculas);

}

/************************************************************************************
Validamos los datos introducidos. Si todos son correctos se envía el formulario,
  en caso contrario se anula su efecto de envío mediante el metodo preventDefault()
*************************************************************************************/
function validar(eventopordefecto) {
    //Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    /*
	
	alert("edad" + validarEdad());
    alert("nif" + validarNif());
    alert("email" + validarEmail());
    alert("provincia" + validarProvincia());
    alert("fecha" + validarFecha());
    alert("telefono" + validarTelefono());
    alert("hora" + validarHora());
*/
    if (validarcampostexto(this) && validarEdad() && validarNif() && validarEmail() && validarProvincia() && validarFecha() && validarTelefono() && validarHora() && confirm("¿Deseas enviar el formulario?"))
        return true;
    else {
        //---CANCELAMOS EL EVENTO DE ENVÍO POR DEFECTO ASIGNADO AL BOTON DE SUBMIT ENVIAR.
        event.preventDefault(); // para FF standard
        event.returnValue = false; // Para IE
        return false; //Salimos de la función devolviendo false.
    }
}

/*************************************************************************
 * Validamos que todos los campos de texto tengan algun valor introducido
 *************************************************************************/
function validarcampostexto(objeto) {
    // A esta función le pasamos un objeto (que en este caso es el botón de enviar).
    // Puesto que validarcampostexto(this) hace referencia al objeto dónde se programó ese evento
    // que fue el botón de enviar.

    var formulario = objeto.form;
    // La propiedad form del botón enviar contiene la referencia del formulario dónde está ese botón submit.
    // De esta manera podemos recorrer todos los elementos del formulario, buscando los que son de tipo texto.
    // Para validar que contengan valores.
    for (var i = 0; i < formulario.elements.length; i++) {
        //---ELIMINAMOS LA CLASE ERROR QUE ESTUVIERA ASIGNADA A ALGÚN CAMPO.
        if (formulario.elements[i].type == "text" && formulario.elements[i].value == "") {
            alert("El campo: " + formulario.elements[i].name + " no puede estar en blanco");
            formulario.elements[i].className = "error";
            formulario.elements[i].focus();
            return false;
        } else {
            formulario.elements[i].className = "";
        }
    }
    return true;
    // Si sale de la función con esta instrucción es que todos los campos de texto son válidos.
}

/**************************************************************
 * Función llamada cada vez que se pierda el foco en nombre o apellidos, y que convierte
 * el valor introducido a mayúsculas
 ***************************************************************/
function convertirMayusculas() {
    var mayus = this.value.toUpperCase();
    document.getElementById(this.id).value = mayus;

}

/**************************************************************
 * Sólo permitimos edades con valores numéricos entre 0 y 105
 ***************************************************************/
function validarEdad() {

    var valor = document.getElementById("edad");

    if (isNaN(valor.value) || valor.value < 0 || valor.value > 110) {
        alert("El campo: " + valor.name + " posee valores incorrectos o la edad <0 o >110");
        valor.className = "error";
        valor.focus();
        return false;
    }

    // Si llega aquí es que la edad es correcta
    document.getElementById("edad").className = "";
    return true;
}

/**************************************************************
 * Sólo permitimos números de teléfono de 9 dígitos que comiencen
 * por 6 ó por 9
 ***************************************************************/
function validarTelefono() {
    // Comenzará con un 6 ó un 9 y seguirá por 8 dígitos numéricos
/*
    var valor = document.getElementById("telefono");
    var patron = /^9/;

   
    if (isNaN(valor.value) || !(patron.test(valor))) {
        //--MOSTRAR EL ERROR
        //--PASAR EL FOCO AL CAMPO HORA
        //--ASIGNAR LA CLASE(ESTILO) CORRESPONDIENTE(ERROR) AL CAMPO
        alert("El campo: " + valor.name + " posee valores erroneos");
        valor.className = "error";
        valor.focus();
        return false;
    }

    // Si llega aquí es que el teléfono es correcto
    document.getElementById("telefono").className = "";
	*/
    return true;
	
    
}

/**********************************************************************
 * Comprobamos el email (caracteres)@(caracteres).(de 2 a 4 caracteres)
 **********************************************************************/
function validarEmail() {
    /* 	Comienza con 2 ó más caracteres alfanuméricos incluidos el guión y el punto, seguido de un símbolo @
    	Seguirá con cualquier conjunto de 2 ó más caracteres alfanuméricos incluido el guión y finalizando en un punto.
    	Terminará con 2 a 4 caracteres alfanuméricos incluidos el guión
    */
    var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var valor = document.getElementById("email");
    if (!(patron.test(valor.value))) {
        document.getElementById("errores").innerHTML = "ERROR: No es un email válido.";
        alert("El campo: " + valor.name + " no es correcto");
        valor.focus();
        valor.className = "error";
        return false;
    }
    // Si llega aquí es que el email es correcto
    document.getElementById("email").className = "";
    return true;
}

/************************************************************************************
 * Comprobamos que el NIF esté compuesto por 8 dígitos, un guión y una letra mayúscula
 *************************************************************************************/
function validarNif() {
    // 8 Números 1 letra de la A-Z en mayúsculas, separados por un guión

    var patron = /^\d{8}[A-Z]$/;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var valor = document.getElementById("nif");
    if (!(patron.test(valor.value)) && (valor.value.charAt(8) != letras[(valor.value.substring(0, 8)) % 23])) {
        alert("El campo: " + valor.name + " posee valores erroneos");
        valor.focus();
        valor.className = "error";
        return false;
    }
    // Si llega aquí es que el número del NIF es correcto
    document.getElementById("nif").className = "";
    return true;
}

/************************************************************************
 * Función que comprueba si hemos realizado alguna selección de provincia
 *************************************************************************/

function validarProvincia() {
    // Comprueba que la opción seleccionada sea diferente a 0.
    // Si es la 0 es que no ha seleccionado ningún nombre de Provincia.
    if (document.getElementById("provincia").selectedIndex == 0) {
        alert("Atención!: Debes seleccionar una provincia.");
        document.getElementById("provincia").focus();
        document.getElementById("provincia").className = "error";
        return false;
    } else return true;
}
/***********************************************************************************************
 * Función que valida la introducción de un dia entre 1 y 31, un mes entre 1 y 12
 * y un año entre 1000 y 2999. Todo separado por un guión o una barra inclinada, y
 * que permite la introducción de hasta dos dígitos (para el día y el mes) con 0 delante ó  sin él
 ************************************************************************************************/
function validarFecha() {
    /* Debe empezar por 0 (no obligatorio) y un número del 1 al 9, ó por 1 y un dígito decimal, ó por 2 y un
       dígito decimal, ó por 3 y un dígito entre el 0 y el 1.
       A continuación admitirá un guión o una barra inclinada.
       Seguirá con un 0 (no obligatorio) y un dígito entre el 1 y el 9, ó un 1 seguido de dígitos entre el 0 y el 2
       Seguirá con un guión o una barra inclinada, y terminaremos con un dígito entre el 1 y el 2 seguido de 
       3 dígitos numéricos
    */
    var patron = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[/\\/](19|20)\d{2}$/;
    var valor = document.getElementById("fecha");
    if (!(patron.test(valor.value))) {
        alert("El campo: " + valor.name + " posee valores erroneos");
        valor.focus();
        valor.className = "error";
        return false;
    }
    // Si llega aquí es que el número del NIF es correcto
    document.getElementById("nif").className = "";
    return true;

}

/***************************************************************************
Función que comprueba la introducción de una hora entre 01 ó 1 hasta 23,
  y unos minutos entre 01 ó 1 hasta 59. Separados por dos puntos (:)
***************************************************************************/

function validarHora() {
    // Comenzamos con un 0 (no obligatorio) y un dígito del 1 al 9, ó un 1 y un dígito numérico, 
    // ó un 2 y un dígito de 0 a 3, continuamos con dos puntos y un dígito entre el 0 y el 5 (no obligatorio)
    // seguido de otro dígito numérico
    /* var patron = /^ --CREAR EL PATRON $/;

     if ( //--SI NO SE CUMPLE EL PATRÓN DEFINIDO/ ) {
         //--MOSTRAR EL ERROR
         //--PASAR EL FOCO AL CAMPO HORA
         //--ASIGNAR LA CLASE(ESTILO) CORRESPONDIENTE(ERROR) AL CAMPO
         return false;
     }*/
    // Si todo ha sido correcto
    return true;
}