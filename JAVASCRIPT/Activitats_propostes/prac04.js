var edat = prompt("Introdueix la teua edat");

if(Number(edat) == edat) {
    if(edat >= 18 && edat <= 100) {
        document.write("Pots conduir.");
    } else {
        document.write("No pots conduir");
    }
} else {
    document.write(edat + " no és un nombre!!");
}