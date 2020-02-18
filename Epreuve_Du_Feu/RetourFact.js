const [node, script, chiffre] = process.argv;
//const bigdecimal = require("bigdecimal");
factoriel(chiffre);

function factoriel(chiffre){
    var result = 1;
    if (chiffre > 0){ // S'assurer que le caractère est un chiffre
        for(i=1; i <= chiffre;i++){
            result = result *i 
        }
        result = result.toLocaleString();
        console.log(result);
        return result
    } else {
        console.log("l'argument n'est pas un chiffre positif")
        
    }
}