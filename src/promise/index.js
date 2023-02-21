//PROMISE EXAMPLE
const promise = new Promise((resolve, reject) => {
    (true)
    ? resolve("Resolved")
    : reject("Rejected")
});

promise
.then((result) => {
    console.log(result);
})

//PROMISE EXAMPLE 2
const cows = 10;

const enoughCows = new Promise((resolve, reject) => {
    //solo si el número de vacas supera 10, se llama al resolve
    //de lo contrario: se llama a reject
    (cows>=15)
    ?resolve("There are enough cows")
    :reject("Not enough cows");
});

enoughCows
.then((result) => {console.log(result);})
.catch((error) => {console.log(error);})
.finally(() => {console.log("Finally");})

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
//se usan arrow function () =>