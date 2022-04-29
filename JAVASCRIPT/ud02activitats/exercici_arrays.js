function reiniciar() {
    location.reload();
}

function carregaExemple() {
    let cadena = "";

    for (let i = 1; i <= 5; i++) {
        cadena += Math.floor((Math.random() * 100) + 1);

        cadena = cadena.substring(0, cadena.length - 1);
        document.getElementById("text");
    }
}

function ordenar() {
    
}