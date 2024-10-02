const pasarPaginaSonido = new Audio('./assets/sounds/pasar-pagina.mp3');


/*Utilizo un fetch para poder recoger los datos del db.json y creo las card de los personajes dinamicamente */
fetch('./db.json') 
    .then(response => response.json())
    .then(data => {
        const cardsContainer = document.querySelector('.contenedor__productos__card');

        data.piratas.forEach(pirata => {
            if(pirata.id <= 6 ){
               const card = document.createElement('div');
            card.classList.add('productos__card');
            card.setAttribute('data-id', pirata.id);
            card.innerHTML = `
                <div class="productos__card--head">
                    <img class="productos__card--imagen" src="${pirata.imagen}" alt="${pirata.nombre}">
                </div>
                <div class="productos__card--body">
                    <h4>${pirata.nombre}</h4>
                    <div class="productos__card--recompensa">
                        <b class="cambiar-imagen"><i class='bx bx-dollar' ></i>Recompensa  </b>
                        <i class='bx bxs-trash-alt'></i>
                    </div>
                </div>
            `;
            cardsContainer.appendChild(card); 
            } 
        });

        
        addImageChangeEvents(data.piratas);
    });

    /*Esta función se utiliza para buscar la imagen por id y añadirle el efecto de scroll */
export default function addImageChangeEvents(piratas) {
    const recompensas = document.querySelectorAll('.cambiar-imagen');
    
    recompensas.forEach(recompensa => {
        recompensa.addEventListener('click', () => {
            const card = recompensa.closest('.productos__card');
            const image = card.querySelector('.productos__card--imagen');
            const pirataId = card.getAttribute('data-id');
            const pirata = piratas.find(p => p.id == pirataId);

           
            image.classList.add('scroll-effect');

          /*Este setTimeOut se utiliza al momento de crearse las card reemplaza la imagen de la foto del personaje 
          por la foto de la recompensa y viceversa */  
            setTimeout(() => {
                if (image.src.includes(pirata.imagen.split('/').pop())) {
                    image.src = pirata.imagenRecompensa; 
                    pasarPaginaSonido.play();
                } else {
                    image.src = pirata.imagen;
                    pasarPaginaSonido.play(); 
                }
                image.classList.remove('scroll-effect'); 
            }, 500); 
        });
    });
}

