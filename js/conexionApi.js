async function listarRecompensas(){
  const conexion = await fetch("http://localhost:3000/piratas");

  const conexionConvertida =  conexion.json();

  return conexionConvertida;
}

//Enviar recompensas 

async function enviarRecompensa(nombre,imagen,imagenRecompensa){
    const conexion = await fetch("http://localhost:3000/piratas",{
        method : "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({
            nombre : nombre,
            imagen : imagen,
            imagenRecompensa : imagenRecompensa,
        })
    })

    const conexionConvertida = conexion.json();

    if(!conexion.ok){
        throw new Error("Ha ocurrido un error al enviar la recompensa");
    }

    return conexionConvertida;
}


export const conexionApi = {
    enviarRecompensa, listarRecompensas
}