

function tablaMultiplicar() {
    do {
        var dividendo = prompt("Introduce un número: ");

        console.clear();
        if(Number(dividendo) == dividendo) {
            for(let i = 0; i <= 10; i++) {
                console.log(dividendo + " x " + i + " = " + dividendo * i);            
            }
            console.log("------------");
        } else {
            alert("El número introducido no es válido.");
        }
    } while(confirm("Quieres lanzar el programa otra vez?")) {

    }
}