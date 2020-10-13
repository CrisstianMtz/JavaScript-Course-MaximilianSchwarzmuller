var var1 = {
  name: "Max",
};

console.log(var1);
/*Llama todo lo ubicado entre {}*/
console.log(var1.name);
/*Llama todo lo de name*/
console.log(typeof var1);
/*Manda a consola el tipo de variable que se tiene*/

var var2 = 5;
console.log(var2);
var2 = 10;
console.log(var2);
/*No se vuelve a usar var ya que se está reasignando un valor a una variable ya existente.
Var se usa para crear nuevas variables*/

/*FUNCIONES*/

function calc() {
  console.log("inside function");
}
/*Las llaves {} se usan cuandos e quieren hacer varias cosas a la vez*/
calc();
/*Las funciones se llaman de esta forma*/

function calc(number1, number2) {
  return number1 + number2;
}
var returned = calc(10, 8);
console.log(returned);

/*CONDICIONALES*/

var condition = false;
var anotherCondition = true;

if (condition) {
  console.log("Executed!");
} else if (anotherCondition) {
  console.log("Still executed");
} else {
  console.log("Not executed");
}
console.log(0 == false);
console.log(1 == true);
/*Funciona para booleanos (1=true, 0=false). If determina condicion, else if agrega mas de un parametro a evaluar y
else determina el resultado en caso de que ninguno de los anteriores se cumpla. Cualquier valor positivo diferente de 0 se interpretara
como true aunque tecnicamente solo 1 es igual a true, aplica lo mismo para valores negativos done todos son false. Todo el texto se
interpreta siempre como true. Null se interpreta como false*/

/*SWITCH*/

var luckynumber = 8;
switch (luckynumber) {
  case 1:
    console.log("is 1");
    break;
  case 8:
    console.log("is 8");
    break;
  default:
    console.log("Default");
    break;
}
/*Es lo mismo que escribir: */

if (luckynumber == 1){
    console.log("is 1");
}
else if (luckynumber == 8){
    console.log('is 8');
}
else {
    console.log("Default");  
}


/*CICLO FOR*/

for (var i = 0; i < 5; i++){
    for (var j =0; j < 2; j++){
        console.log(i);
    }
}

/*En este caso el ciclo de adentro debe finalizar para poder hacer otra iteracion del ciclo superior*/

for (var i = 0; i < 5; i++){
    if (i == 1){
        continue;
    }
    else if (i == 4){
        break
    }
    console.log(i);
}
/*Continue hace que la iteracion actual pase a la siguiente, en este caso se salta el console.log ya que no 
llega hasta esa parte. El brake indica que el ciclo debe romperse en ese punto*/
