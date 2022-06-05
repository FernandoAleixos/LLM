const arrayNombres = [];

function existeNombre(nombre) {
    return arrayNombres.includes(nombre.trim().toLowerCase());
}

function insertar() {
    evt.preventDefault();

    let nombre = document.getElementById("noms").value;

    if (nombre == "") {
        alert("Aquest no es un nom correcte.");
    } else if (arrayNombres.includes(nombre.trim().toLowerCase())) {
        let opcion = "<li>" + nombre + "</li>";
        let lista = document.getElementById("listar");
        lista.innerHTML += opcion;
        arrayNombres.push(nombre.trim().toLowerCase())
    } else {
        alert("El nombre introducido ya existe");
    }
}

function llistarNombres() {
    var todos = "LISTA DE LOS NOMBRES ORDENADOS";
    var nombresOrdenados = arrayNombres.sort;
    
    for (let i = 0; i < arrayNombres.length; i++) {
        document.write(todos += `<li> ${nombresOrdenados[i]} </li>`);
    }
}