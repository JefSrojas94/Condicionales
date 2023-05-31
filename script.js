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
//EJ 5
let numero1=0;
let numero2=0;
numero1=prompt("Ingrese el primer numero: ");
numero2=prompt("Ingrese el segundo numero: ");
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
let dia="";
dia=prompt("Ingrese el dia de la semana: ");
if(dia==="lunes"){
    alert("Feliz inicio de Semana!!!");
}else if(dia==="viernes"){
    alert("Feliz fin de Semana!!!");
}else if(dia==="sabado"||dia==="domingo"){
    alert("A DESCANSAR AMIGO LO HICISTE BIEN ESTA SEMANA!!!!!!!!");
}
//EJ 8 
let calif=0;
calif=prompt("Ingresela clificación en un rango de 1 A 10: ");
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