var a=1,f=1,lim=8;

function factorial(f){
    var fac=1,i;
    for(i=1;i<=f;i++){
        fac*=i;       
    }
    return fac;
}

for(var i=1;i<=lim;i++){
    a+=1/(factorial(i));
}
console.log("resultado de primer serie: "+a);

for(var b=1;b<=lim;b++){
    a+=Math.pow(a,b++/(factorial(b)));
}
console.log("resultado de la segunda serie: "+a);