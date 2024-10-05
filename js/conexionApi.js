async function listarRecompensas() {
    const conexion = await fetch("http://localhost:3000/piratas");

    if (!conexion.ok) {
        throw new Error("Error al listar recompensas");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

// Enviar recompensas -- POST
async function enviarRecompensa(nombre, imagen, imagenRecompensa) {
    const conexion = await fetch("http://localhost:3000/piratas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            imagen: imagen,
            imagenRecompensa: imagenRecompensa,
        })
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar la recompensa");
    }

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

// Eliminar recompensa -- DELETE
async function eliminarRecompensa(id) {
    const conexion = await fetch(`http://localhost:3000/piratas/${id}`, {
        method: "DELETE",
    });

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar la recompensa");
    }

    return await conexion.json();
}

export const conexionApi = {
    enviarRecompensa,
    listarRecompensas,
    eliminarRecompensa
};
