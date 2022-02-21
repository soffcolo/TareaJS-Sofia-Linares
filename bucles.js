// Ejercicio contar del 1 al 10
let i;

for(i=1; i<=10;i=i+1){
    console.log(i);
}

// Ejercicio 2

let j;

for(j=1;j<=100;j++){
    if(j%5==0){
        console.log(j);
    }
}

// Ejercicio 3

let n;
let a;
let m=0;

for(a=1;a<=5;a++){
    n = parseInt(prompt("ingrese el dato " +a+ "de 5"));
    m = m+n; //acumulador 
}
console.log(`la suma total es: ${m}`);
console.log (`El promedio es: ${m/5}`);

// Ejercicio 4 

var x= 4;

do{
document.write("este es el numero" + x + "<br>");
x++;
}while(x<=10);
