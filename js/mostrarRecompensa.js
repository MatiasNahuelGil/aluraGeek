import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector("[data-lista]");
const pasarPaginaSonido = new Audio('./assets/sounds/pasar-pagina.mp3');
const limpiarRecompensas = document.querySelector("#limpiar");

function crearRecompensa(nombre, imagen, imagenRecompensa) {
    const recompensa = document.createElement("div");
    recompensa.className = "productos__card";

    recompensa.innerHTML = `
        <div class="productos__card--head">
            <img class="productos__card--imagen" src="${imagen}" alt="${nombre}">
        </div>
        <div class="productos__card--body">
            <h4>${nombre}</h4>
            <div class="productos__card--recompensa">
                <b class="cambiar-imagen"><i class='bx bx-dollar'></i>Recompensa</b>
                <i class='bx bxs-trash-alt' id="borrar-recompensa"></i>
            </div>
        </div>
    `;

    const cambiarImagenBtn = recompensa.querySelector('.cambiar-imagen');
    cambiarImagenBtn.addEventListener('click', () => {
        const image = recompensa.querySelector('.productos__card--imagen');
        image.classList.add('scroll-effect');

        setTimeout(() => {
            if (image.src.includes(imagen.split('/').pop())) {
                image.src = imagenRecompensa;
            } else {
                image.src = imagen;
            }
            pasarPaginaSonido.play();
            image.classList.remove('scroll-effect');
        }, 500);
    });

    const borrarRecompensa = recompensa.querySelector('#borrar-recompensa');
    borrarRecompensa.addEventListener('click', () => {
        const confirmarEliminar = confirm(`¿Estás seguro de eliminar a ${nombre}?`);
        if (confirmarEliminar) {
            lista.removeChild(recompensa);
            if (lista.children.length === 0) {
                mostrarMensajeNoHayRecompensa(); 
            }
        }
    });

    return recompensa;
}

async function listarRecompensas() {
    const listApi = await conexionApi.listarRecompensas();
    
    lista.innerHTML = ""; 

    if (listApi.length === 0) {
        mostrarMensajeNoHayRecompensa();
    } else {
        listApi.forEach(recompensa => {
            lista.appendChild(crearRecompensa(recompensa.nombre, recompensa.imagen, recompensa.imagenRecompensa));
        });
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
    `;
    
    lista.appendChild(mensaje); 
}

limpiarRecompensas.addEventListener('click', () => {
    const confirmarEliminar = confirm("¿Estás seguro de que quieres borrar todas las recompensas?");
    if (confirmarEliminar) {
        lista.innerHTML = ''; 
        mostrarMensajeNoHayRecompensa(); 
    }
});


listarRecompensas();
