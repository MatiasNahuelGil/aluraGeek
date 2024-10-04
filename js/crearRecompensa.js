import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector("[data-formulario]");

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