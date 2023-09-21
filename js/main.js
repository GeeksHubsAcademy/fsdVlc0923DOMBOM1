
let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{


    if(e.target.id === 'jose'){

        // pantalla.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url('img/kawai.jpg')";

    } else if (e.target.id === 'paco') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('img/bear.jpg')";

    };


});