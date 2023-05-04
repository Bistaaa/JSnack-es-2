//Crea un array vuoto. 
let numeriDispari = [];

//Chiedi per 6 volte all’utente di inserire un numero 
for (let i = 1; i <= 6; i++) {
    const numero = parseInt (prompt("Inserisci un numero"));
    console.log(numero);

    //scegliamo i numeri dispari
    if (numero % 2 === 1) {
        numeriDispari.push(numero);
    };
}

console.log(numeriDispari);
