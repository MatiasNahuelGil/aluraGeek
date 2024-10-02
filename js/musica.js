const musicaOnePiece = new Audio("../assets/sounds/musicaOnePiece.mp3");

const inputMusica = document.querySelector("#alternar-musica");

inputMusica.addEventListener('change', ()=>{
    if (musicaOnePiece.paused){
        musicaOnePiece.play();
    }else{
        musicaOnePiece.pause();
    }
})