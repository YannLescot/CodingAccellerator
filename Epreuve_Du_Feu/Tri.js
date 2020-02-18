const [node, script, n1, n2, n3, n4, n5] = process.argv;
const chiffres = [n1, n2, n3, n4, n5]

if(process.argv[9] == null){ //pas plus de 5 chiffres à trier (index 9 de process.arg = sixième chiffre présumé)
    chiffres.sort();
    console.log(chiffres);
} else{
    console.log("Trop de chiffres à trier");
}