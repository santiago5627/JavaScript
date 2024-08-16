//importar la funcion mostrarenHTML
import { mostrarEnHTML } from "./mostrarEnHTML.js"; 

//funcion de obtener Datos
//utilizando asyc - await
const obtenerEmpleado = async() => {

    const url = "data/empleados.json"
    const response = await fetch(url);
    const empleado = await response.json();
    //invocar la funcion mostrarEnHTML
    mostrarEnHTML(empleado)
}
const btnCargarJSON = 
        document.querySelector('#cargarJSON');
//añadir evento click al boton
btnCargarJSON.addEventListener('click' ,
            obtenerEmpleado)