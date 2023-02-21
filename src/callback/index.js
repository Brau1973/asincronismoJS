function sum (num1,num2){
    return num1 + num2;
}

function calc (num1, num2, callback){
    return console.log(callback(num1,num2)); 
}

// console.log("antes calc");
// calc(1,2,sum);
// console.log("Desp calc");

console.log("antes calc");
setTimeout(() => {
    calc(1,2,sum);
}, 2000);
console.log("Desp calc");

// console.log("antes calc");
// setTimeout(() => {
//     console.log(sum(1,2));
// }, 2000);
// console.log("Desp calc");