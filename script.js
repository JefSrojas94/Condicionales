//EJ 1
let bello = "";
bello = prompt("¿Eres bellisimo/a?");
if (bello === "si") {
  console.log("Ciertamente");
} else {
  console.log("No te creo");
}
//EJ 2
let num=0;
let res=0;
num=prompt("Digite el número a operar: ");
res = num%2;
if (res===0){
    console.log(num +" num es divisible entre dos");
}
//EJ 3
let num2=0;
let res2=0;
num2=prompt("Digite el número a operar: ");
res2 = num2%2;
if (res2!==0){
    alert(num2 +" no es par");
}
else{
    alert(num2+" es par")
}
//EJ4
let numcliente=0;
numcliente=prompt("ingrese el numero de cliente:");
if(Number(numcliente) === 1000){
    alert("Ganaste un premio");
}
else{
    alert("Lo sentimos, sigue participando");
}