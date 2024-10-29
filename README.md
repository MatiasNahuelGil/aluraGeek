# Alura Geek - Desafío Alura  "Álbum One Piece"


Descripción del proyecto: 

One Marine es una página web sencilla creada con fines prácticos, resolviendo el desafío de Alura Latam. El objetivo principal de esta página es realizar un CRUD y manipular el DOM, simulando una API con json-server. En esta ocasión, utilicé una ambientación en torno al universo del famoso anime One Piece, donde podremos crear un álbum con las figuras de los personajes y sus recompensas, las cuales podemos agregar o eliminar respectivamente de la pantalla. Por último, puedes escuchar algunos soundtracks de fondo relacionados con el mundo de One Piece mientras interactúas con el álbum creado.


Temas tratados en este desafío:
- Simulación de API, utilizando Json-server;
- Requisición GET;
- Requisición POST;
- Requisición DELETE;
- Manipulación del DOM;
- Renderización de elementos;
- Página web responsiva;

  
## Despliegue de servidor Json-server

Para poder ver las recompensas, en tu terminal coloca: 

```bash
  npm install json-server
  npx json-server --watch db.json
```


## Agregar figuras al álbum

Para poder agregar figuras al álbum es sencillo, puedes optar por 2 maneras: 

1- Coloca el nombre de tu personaje y descarga su junto con su recompensa, las introduces en tus assets y colocas la ruta en el input. En el proyecto te dejo algunas imágenes de prueba y sus rutas:

{

        "id" : 7,
        "nombre" : "Usopp",
        "imagen" : "./assets/images/usopp.jpg",
        "imagenRecompensa" : "./assets/images/recompensas/usoppRecompensa.jpg"
},

{

        "id" : 8,
        "nombre" : "Chopper",
        "imagen" : "./assets/images/chopper.jpg",
        "imagenRecompensa" : "./assets/images/recompensas/chopperRecompensa.jpg"
},

{

        "id" : 9,
        "nombre" : "Brook",
        "imagen" : "./assets/images/brook.jpg",
        "imagenRecompensa" : "./assets/images/recompensas/brookRecompensa.jpg"
},

{

        "id" : 10,
        "nombre" : "Nami",
        "imagen" : "./assets/images/nami.jpg",
        "imagenRecompensa" : "./assets/images/recompensas/namiRecompensa.jpg"
 }

2-La segunda forma es colocar el nombre de tu personaje y pegar las URL de las dos imágenes que desees en el input de imagen e imagen recompensa.


Por último, envías la petición, le das a confirmar y el personaje aparecerá en la parte inferior del álbum.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portafolio-gilmatias.netlify.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/matias-nahuel-gil-732b78308/)



## Authors

- [@GilMatiasNahuel](https://github.com/MatiasNahuelGil)


