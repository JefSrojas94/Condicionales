//EJ 1
let bello = prompt("¿Eres bellisimo/a?");

if (bello === "si") {
  console.log("Ciertamente");
} else {
  console.log("No te creo");
}
//EJ 2
let num=prompt("Digite el número a operar: ");
let res=0;
res = num%2;
if (res===0){
    console.log(num +" num es divisible entre dos");
}
//EJ 3
let num2=prompt("Digite el número a operar: ");
let res2=num2%2;;
if (res2!==0){
    alert(num2 +" no es par");
}
else{
    alert(num2+" es par")
}
//EJ4
let numcliente=prompt("ingrese el numero de cliente:");
if(Number(numcliente) === 1000){
    alert("Ganaste un premio");
}
else{
    alert("Lo sentimos, sigue participando");
}
//EJ 5
let numero1=prompt("Ingrese el primer numero: ");
let numero2=prompt("Ingrese el segundo numero: ");
if(Number(numero1) < Number(numero2)){
    alert("el numero menor es: "+numero1);
}
else{
    alert("el numero menor es: "+numero2);
}
//EJ 6
let numero3=0;
numero1=prompt("Ingrese el primer numero: ");
numero2=prompt("Ingrese el segundo numero: ");
numero3=prompt("Ingrese el tercer numero: ");
if(Number(numero1)===Number(numero2)||Number(numero1)===Number(numero3)){
    alert("hay dos numeros iguales");
}else if(Number(numero1)>Number(numero2)&&Number(numero1)>Number(numero3)){
    alert("el numero mayor es: "+numero1);
}else if(Number(numero2)>Number(numero3)&&Number(numero2)>Number(numero3)){
    alert("el numero mayor es: "+numero2);
}else if(Number(numero3)>Number(numero2)&&Number(numero3)>Number(numero1)){
    alert("el numero mayor es: "+numero3);
}
//EJ 7
let dia=prompt("Ingrese el dia de la semana: ");
if(dia==="lunes"){
    alert("Feliz inicio de Semana!!!");
}else if(dia==="viernes"){
    alert("Feliz fin de Semana!!!");
}else if(dia==="sabado"||dia==="domingo"){
    alert("A DESCANSAR AMIGO LO HICISTE BIEN ESTA SEMANA!!!!!!!!");
}else{
    alert("A TRABAJAR!!!!!!!!");
}
//EJ 8 
let calif=prompt("Ingresela clificación en un rango de 1 A 10: ");
if(Number(calif)>=1 && Number(calif)<=10){
    if(Number(calif)<6){
        alert("reprobado")
    }else if (Number(calif)>=6 && Number(calif)<=8){
        alert("regular")
    }else if (Number(calif)===9){
        alert("bien")
    }else if (Number(calif)===10){
        alert("Excelente")
    }
}else{
    alert("!!!!ERROR, FUERA DEL RANGO")
}
//EJ 9
let topping = prompt("Ingrese el topping a adicionar a su orden: ");
let helado = 50;
topping.toLowerCase
if(topping==="oreo"){
    helado=helado+10;
    alert("el valor del su healdo es: "+helado+"MXN");
}else if(topping==="kitkat"){
    helado=helado+15;
    alert("el valor del su healdo es: "+helado+"MXN");
}else if(topping==="brownie"){
    helado=helado+20;
    alert("el valor del su healdo es: "+helado+"MXN");
}else{
    alert("no tenemos este topping, lo sentimos");
    alert("el valor del su healdo es: "+helado+"MXN");
}
//EJ 10
let costo=0;
let nivel=prompt("Escriba el nivel: (course,carrera,master)");
nivel.toLowerCase
let beca=prompt("Escriba el nivel: (facebook,google,jesua)");
beca.toLowerCase
let desc=0;
if (nivel==="course") {
    costo=4999*2; 
    if (beca==="facebook") {
        desc=costo*0.2;
        costo=costo-desc;
        alert("el valor de su curso es: "+costo+"MXN");
    } else if(beca==="google"){
        desc=costo*0.15;
        alert("el valor de su curso es: "+costo+"MXN");
    }else if (beca==="jesua") {
        desc=costo*0.5;
        alert("el valor de su curso es: "+costo+"MXN");
    } 
}else if (nivel==="carrera") {
    costo=3999*6;
    if (beca==="facebook") {
        desc=costo*0.2;
        costo=costo-desc;
        alert("el valor de su curso es: "+costo+"MXN");
    } else if(beca==="google"){
        desc=costo*0.15;
        alert("el valor de su curso es: "+costo+"MXN");
    }else if (beca==="jesua") {
        desc=costo*0.5;
        alert("el valor de su curso es: "+costo+"MXN");
    }
}else if (nivel==="master") {
    costo=2999*12;
    if (beca==="facebook") {
        desc=costo*0.2;
        costo=costo-desc;
        alert("el valor de su curso es: "+costo+"MXN");
    } else if(beca==="google"){
        desc=costo*0.15;
        alert("el valor de su curso es: "+costo+"MXN");
    }else if (beca==="jesua") {
        desc=costo*0.5;
        alert("el valor de su curso es: "+costo+"MXN");
    }
}
//EJ 11
let tipveh=prompt("que tipo de vehiculo tiene: (coche,moto o autobus)");
let kmrecor=prompt("ingrese la distancia recorrida:");
let combust=prompt("litros de combustible consumidos");
//total=(preciokm*kmrecorridos)+extra litros consumidos
let totalpago=0;
if (tipveh==="coche") {
    totalpago=kmrecor*0.20;
    if (Number(combust)===0 && Number(combust)<=100) {
        totalpago=totalpago+5;
    }else {
        totalpago=totalpago+10;
    }
} else if (tipveh==="moto") {
    totalpago=kmrecor*0.10;
    if (Number(combust)===0 && Number(combust)<=100) {
        totalpago=totalpago+5;
    }else {
        totalpago=totalpago+10;
    }
} else if (tipveh==="autobus") {
    totalpago=kmrecor*0.5;
    if (Number(combust)===0 && Number(combust)<=100) {
        totalpago=totalpago+5;
    }else {
        totalpago=totalpago+10;
    }
} 