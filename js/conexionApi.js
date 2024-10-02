const url = "https://api.api-onepiece.com/v2/characters/en"

async function listaDePersonajes(){
    let datosPersonajes = await fetch(url);
    let datos = await datosPersonajes.json();

    console.log(datos)
}


listaDePersonajes();