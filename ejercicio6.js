var frase = prompt(" frase: ");
var a=0, e=0, i=0, o=0, u=0;
(frase,20,'\n');

for(var h = 0; h <20; h++){
    switch(frase[h]){
        case 'a': a++;
        break;
        case 'e': e++;
        break;
        case 'i': i++;
        break;
        case 'o': o++;
        break;
        case 'u': u++;
        break;
    }
}
console.log("vocal a: ",a);
console.log("vocal e: ",e);
console.log("vocal i: ",i);
console.log("vocal o: ",o);
console.log("vocal u: ",u);