import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector("[data-formulario]");

/* Función crear recompensa: toma los valores que nos dan los input de los formularios 
   para luego poder añadir una nueva recompensa a la lista */
async function crearRecompensa(evento) {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    const imagenRecompensa = document.querySelector("[data-imagenRecompensa]").value;

    // Mostrar el modal de confirmación
    const { value: confirm } = await Swal.fire({
        title: `¿Estás seguro de añadir la recompensa: "${nombre}"?`,
        
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, añadir',
        cancelButtonText: 'No, cancelar'
    });

    if (confirm) {
        try {
            await conexionApi.enviarRecompensa(nombre, imagen, imagenRecompensa);

            
            Swal.fire({
                title: 'Éxito',
                text: 'Recompensa añadida correctamente.',
                icon: 'success',
                timer : 3000,
            });

            
            formulario.reset();

        } catch (error) {
            console.error("Error al añadir la recompensa:", error);
            Swal.fire({
                title: 'Error',
                text: "No se pudo añadir la recompensa. Inténtalo de nuevo.",
                icon: 'error'
            });
        }
    }
};

formulario.addEventListener("submit", evento => crearRecompensa(evento));
