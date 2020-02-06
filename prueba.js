var num1 =Math.floor(Math.random()*19+1);
var num2=Math.floor(Math.random()*19+1);
var num3=Math.floor(Math.random()*19+1);

console.log("numeros :");
console.log( "numero uno :"+num1);
console.log("numero dos :"+num2);
console.log("numero tres :"+num3);

if(num1>num2 && num1>num3){
    
    console.log("El numero 1 es el mayor  ");
}
else{
    
    if(num2>num1 && num2>num3){
        console.log("el número 2 es mayor ");
    }
else{    
        console.log("el número 3 es mayor ");
    
}

}
