alert("Bienvenid@ a Sauce Boyz Store");

//Comienza Array de Zapatillas con forEach

const zapatillasCasuales = [
    { id: 1, nombre: "Zapatilla Adidas Forum Low", precio : 36000 },
    { id: 2, nombre: "Zapatilla Adidas Forum Low X Bad Bunny", precio : 45000 },
    { id: 3, nombre: "Zapatilla Nike Air Force 1", precio : 30000 },
    { id: 4, nombre: "Zapatilla Nike VaporMax", precio : 35000 },
    { id: 5, nombre: "Zapatilla Converse Chuck 70", precio : 20000 },
];

const zapatillasDeportivas = [
    { id: 1, nombre: "Zapatilla Adidas Ultraboost", precio : 36000 },
    { id: 2, nombre: "Zapatilla Adidas Solarboost", precio : 45000 },
    { id: 3, nombre: "Zapatilla Nike Epic React", precio : 30000 },
    { id: 4, nombre: "Zapatilla Nike Pegasus", precio : 35000 },
    { id: 5, nombre: "Zapatilla Asics Patriot", precio : 20000 },
];


let cliente = prompt("Coloque en la caja de texto si desea adquirir zapatillas casuales o zapatillas deportivas");


if (cliente === "zapatillas casuales") {
    zapatillasCasuales.forEach((producto) => {
        alert(
            `
            Nombre ${producto.nombre}
            Precio ${producto.precio}
            `
        );
    });
}

else if (cliente === "zapatillas deportivas") {
    zapatillasDeportivas.forEach((producto) => {
        alert(
            `
            Nombre ${producto.nombre}
            Precio ${producto.precio}
            `
        );
    });
}

//Termina Arrays de Zapatillas con forEach

//Inicia método de búsqueda filter()

let filtradosCasuales = zapatillasCasuales.filter(zapatilla => zapatilla.precio > 31.000);

console.log(filtradosCasuales);

let filtradosDeportivas = zapatillasDeportivas.filter(zapatilla => zapatilla.precio > 31.000);

console.log(filtradosDeportivas);

//Termina método de búsqueda filter()
