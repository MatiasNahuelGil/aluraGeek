import { conexionApi } from "./conexionApi.js";


const lista = document.querySelector("[data-lista]");
const pasarPaginaSonido = new Audio('./assets/sounds/pasar-pagina.mp3');
const limpiarRecompensas = document.querySelector("#limpiar");

function crearRecompensa(nombre, imagen, imagenRecompensa, id) {
    const recompensa = document.createElement("div");
    recompensa.className = "recompensas__card";

    recompensa.innerHTML = `
        <div class="recompensas__card--head">
            <img class="recompensas__card--imagen" src="${imagen}" alt="${nombre}">
        </div>
        <div class="recompensas__card--body">
            <h4>${nombre}</h4>
            <div class="recompensas__card--recompensa">
                <button class="cambiar-imagen"></i>$ Recompensa</button>
                <i class='bx bxs-trash-alt' id="borrar-recompensa"></i>
            </div>
        </div>
    `;

    const cambiarImagenBtn = recompensa.querySelector('.cambiar-imagen');
    cambiarImagenBtn.addEventListener('click', () => {
        const image = recompensa.querySelector('.recompensas__card--imagen');
        image.classList.add('scroll-effect');

        setTimeout(() => {
            image.src = image.src.includes(imagen.split('/').pop()) ? imagenRecompensa : imagen;
            pasarPaginaSonido.play();
            image.classList.remove('scroll-effect');
        }, 500);
    });

    const borrarRecompensa = recompensa.querySelector('#borrar-recompensa');
    
    borrarRecompensa.addEventListener('click', async () => {
        const { value: confirm } = await Swal.fire({
            title: `¿Estás seguro de eliminar a ${nombre}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'No, cancelar'
        });
    
        if (confirm) {
            try {
                await conexionApi.eliminarRecompensa(id);
                lista.removeChild(recompensa);
                if (lista.children.length === 0) {
                    mostrarMensajeNoHayRecompensa();
                }
            } catch (error) {
                console.error("Error al eliminar la recompensa:", error);
                Swal.fire({
                    title: 'Error',
                    text: "No se pudo eliminar la recompensa. Inténtalo de nuevo.",
                    icon: 'error'
                });
            }
        }
    });
    

    return recompensa;
}

async function listarRecompensas() {
    try {
        const listApi = await conexionApi.listarRecompensas();
        
        lista.innerHTML = ""; 

        if (listApi.length === 0) {
            mostrarMensajeNoHayRecompensa();
        } else {
            listApi.forEach(recompensa => {
                lista.appendChild(crearRecompensa(recompensa.nombre, recompensa.imagen, recompensa.imagenRecompensa, recompensa.id));
            });
        }
    } catch (error) {
        console.error("Error al listar recompensas:", error);
        alert("Ocurrió un error al cargar las recompensas. Inténtalo de nuevo más tarde.");
    }
}

function mostrarMensajeNoHayRecompensa() {
    const mensajeExistente = document.querySelector(".mensaje__noRecompensa");
    if (mensajeExistente) {
        mensajeExistente.remove();
    }

    const mensaje = document.createElement("div");
    mensaje.className = "mensaje__noRecompensa";
    mensaje.innerHTML = `
        <img class="akainu-enojado" src="./assets/images/akainuEnojado.png"/>
        <p>No hay recompensas disponibles.</p>
    `;
    
    lista.appendChild(mensaje); 
}

limpiarRecompensas.addEventListener('click', async () => {
    const { value: confirm } = await Swal.fire({
        title: "¿Estás seguro de que quieres borrar todas las recompensas?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'No, cancelar'
    });

    if (confirm) {
        lista.innerHTML = '';
        mostrarMensajeNoHayRecompensa();
    }
});


listarRecompensas();
