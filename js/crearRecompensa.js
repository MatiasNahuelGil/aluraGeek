import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector("[data-formulario]");


/*Funcion crear recompensa : la utilizamos para tomar los valores que nos dan  
los input de los formularios para luego poder añadir una nueva recompensa a la lista
*/
async function crearRecompensa(evento){
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const imagenRecompensa = document.querySelector("[data-imagenRecompensa]").value;

    try {
        await conexionApi.enviarRecompensa(nombre,imagen,imagenRecompensa);
    }catch(error){
        alert(error)
    }
};

formulario.addEventListener("submit", evento => crearRecompensa(evento) );