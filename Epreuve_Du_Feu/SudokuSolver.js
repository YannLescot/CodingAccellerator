const _ = require("underscore"); // Nécessaire pour inclure la librairie underscore
const fs = require('fs'); // Nécessaire pour dire qu'il faut un File System
const c1 = fs.readFileSync("./" + process.argv[2], "utf8").replace(/_/g, "0").replace(/[^\d]/g, "").match(/.{1,9}/g);
var tab2d = [];

function Tableau2d(arr) { //Fonction qui permet de passer le tableau en 2 dimensions
    for (let i = 0; i < arr.length; i++) {
        let splittedIndex = arr[i].split('');
        tab2d.push(splittedIndex);
    }
    return tab2d; //Pour les fonctions suivantes, attention à bien utiliser tab2d et non pas c1
}

function solve(arr) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var ilyachangement = false;
            let soluces = possible(arr, i, j);
            if (soluces == false) {
                continue
            }
            if (soluces.length == "1") {
                arr[i][j] = soluces[0].toString();
                ilyachangement = true;
            }
        }
    }
    if (ilyachangement == false) {
        return
    }
}

function possible(arr, ind, ind2) {
    if (arr[ind][ind2] != "0") {
        return false
    }
    var possibilites = []
    for (i = 1; i < 9; i++) {
        possibilites.push(i);
    }
    for (i = 0; i < arr[ind].length; i++) { //Boucle qui parcoure la ligne
        let x = arr[ind][i];
        x = parseInt(x);
        //console.log(x);
        possibilites = _.without(possibilites, x);
    }
    for (i = 0; i < 9; i++) { //Boucle qui parcoure la colonne
        let x = arr[i][ind2];
        x = parseInt(x);
        //console.log(x);
        possibilites = _.without(possibilites, x);
    }
    //console.log(possibilites);
    var carréi = ((parseInt(ind / 3)) * 3); //Longueur du carré
    var carréj = ((parseInt(ind2 / 3)) * 3); //Hauteur du carré

    sousTableau = arr.slice(carréi, carréi + 3); //Tableau qui correspondra aux éléments présents dans le carré
    for (i = 0; i < sousTableau.length; i++) {
        sousTableau[i] = sousTableau[i].slice(carréj, carréj + 3);
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            let x = sousTableau[i][j]
            x = parseInt(x);
            possibilites = _.without(possibilites, x);
        }
    }
    //console.log(possibilites);
    return possibilites
}

Tableau2d(c1);
solve(tab2d);
console.log(tab2d);

/*
- Transformer mon txt en lignes (supprimer les | également (replace tous les éléments inutiles par ""))
- Faire un tableau à 2 dimensions (Fonction Tableau2d)
- Function récupération données de ligne (index [0][0];[0][1];[0][2]; ...[0][8] par ex)
- Function récupération données de colonne (index [0][0];[1][0];[2][0; ...])
- Function récupération données de carré (index [0][0]; [0][1] [0][2]; [1][0] [1][1] [1][2;] [2][0] [2][1] [2][2] )
- Dans double boucle, si _, vérifier s'il y a un autre _ dans l'une des 3 fonctions (ligne colonne carré), si oui pour les 3, suivant
- si non, function TrouverValeur

function TrouverValeur(arr){
    for(i = 1; i <= 9; i++){
    if(arr.find(i) == false){
               return i;
        }
    }
    return 0;
}

- Quand la valeur est trouvée, l'importer dans le tableau à la place de l'_
- fonction Full (retourne true/false en fonction de si le sudoku est plein ou pas)

while( Full(c1) == "false"){
for(var i = 0; i < c1.length; i++){
    for(var j = 0; j < c1[i].length; j++){
            

    }

}
}

- Réafficher le sudoku tel quel (version du début)
*/