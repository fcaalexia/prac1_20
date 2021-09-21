var palabra = prompt ("palabra: ");
var k = 0;
var vocales = ['a','e','i','o','u']

for(var l=0; l<=palabra.length; l++){
    if(vocales.indexOf(palabra[l])>=0){
        ++k;
        console.log("vocales: "+k);
    }
}
