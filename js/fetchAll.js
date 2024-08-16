//funcion de conexion
const obtenerEmpleado = () =>{

    const url = 'data/empleados.json';
    fetch(url)
    .then(res => res.json())
    .then(data => mostrarEnHTML(data))        
   .catch(err => console.log(err));

}

//selector al boton
const btnCargarJSON = 
        document.querySelector(`#cargarJSON`);

//Añadir evento click al boton 
btnCargarJSON.addEventListener('click',
    obtenerEmpleado);

