function mostrarInfo(evento) {
    evento.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            let salida = "";

            for (let i = 0; i < data.length; i++) {
                if (document.getElementById("users").value == data[i].name) {
                    salida += `Nombre: ${data[i].name}</br>`;
                    salida += `Username: ${data[i].username}</br>`;
                    salida += `Email: ${data[i].email}</br>`;
                    salida += `Calle: ${data[i].address.street}</br>`;
                    salida += `Suite: ${data[i].address.suite}</br>`;
                    salida += `Ciudad: ${data[i].address.city}</br>`;
                    salida += `Codigo Postal: ${data[i].addresszipcode}</br>`;
                    salida += `Llatitud: ${data[i].geo.lat}</br>`;
                    salida += `Longitud: ${data[i].geo.lng}</br>`;
                }

                document.getElementById("informacio").innerHTML = salida;
            }
        });

}