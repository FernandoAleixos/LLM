var edat = prompt("Introdueix la teua edat");

if(Number(edat) == edat) {
    if(edat >= 18 && edat <= 100) {
        document.write("Puedes conducir.");
    } else {
        document.write("No puedes conducir");
    }
} else {
    document.write(edat + " no és un número!!");
}