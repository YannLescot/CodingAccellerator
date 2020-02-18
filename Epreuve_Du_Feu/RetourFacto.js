const [node, script, chiffre] = process.argv;
const bigdecimal = require("bigdecimal");
factoriel(chiffre);

function factoriel(chiffre){
    var result = 1;
    if (chiffre > 0){ // S'assurer que le caractère est un chiffre
        for(i=1; i <= chiffre;i++){
            result = result *i 
        }
        bigdecimal bd1 = new BigDecimal(result);
        //result = result.toLocaleString();
        //result = result.toBigDecimal();
        //result = parseInt(result);
        console.log(bd1);
    } else {
        console.log("l'argument n'est pas un chiffre positif")
        
    }
}