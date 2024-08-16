//api fetch :
//establecer conexion a  archivos o
//url externas al proyecto:
//(otros sitema)
//funcion para tratar el objeto json(empleado)


const mostrarEmpleado = ({nombre, empresa})=>{
    //console.log(nombre)
    //console.log(empresa)
    const contenido= document.querySelector('#contenido')
    //poner contenido HTML enselector
    contenido.innerHTML = `
    <h2>Empleado del archivo: </h2>
    <p>${nombre}</p>
    <p>${empresa}</p>
    `
}   



const obtenerDatos = ()=>{

    //definir la ruta al archivo de lectura
    const archivo = "data/empleado.json"

    //conectarme al archivo
    fetch(archivo)
        .then(respuesta =>
            respuesta.json())
        .then (dato=> mostrarEmpleado(dato))
        .catch(error=> console.log(error))
}





obtenerDatos()