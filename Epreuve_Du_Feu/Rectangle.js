const fs = require('fs'); // Nécessaire pour dire qu'il faut un File System
const c1 = fs.readFileSync("./" + process.argv[2],"utf8").split("\n"); // on cherche le chemin de fichier (non flexible); utf8 = encodage; split "crée un nouvel élément dans le tableau dès qu'il y a un \n"
const c2 = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");

function colonne(tab, ind) { 
    var col=[];
    for (var i = 0; i < tab.length; i++){
            col.push(tab[i][ind]);
    }
        return col
}

for (var i = 0; i < c2.length; i++) {
    for (var j = 0; j < c2[i].length; j++) {
        //test si 
         if(c2[i][j]==c1[0][0] && c2[i][j+1]==c1[0][1]&& c2[i][j+2]==c1[0][2]){
             if (c2[i+1][j]==c1[1][0] && c2[i+1][j+1]==c1[1][1]&& c2[i+1][j+2]==c1[1][2]) {
                 if (c2[i+2][j]==c1[2][0] && c2[i+2][j+1]==c1[2][1]&& c2[i+2][j+2]==c1[2][2]){

                     //return colonne(c1,0)
                     colonne_c2 =  colonne(c2,j)
                     colonne_c1 = colonne(c1,0)

                     for (var k = 0; k< colonne_c2.length; k++) {

                          if(colonne_c2[k]==colonne_c1[0] && colonne_c2[k+1]==colonne_c1[1] && colonne_c2[k+2]==colonne_c1[2]){

                              colonne_c1_2 = colonne(c1,1)
                              console.log(j+","+k)
                          }
                      } 
                     
                     
                 }

             }

             
         }
    } 
}

/*
- Créer les fichiers txt
- Convertir les fichiers txt en tableaux
- Rechercher le contenu de c1 dans celui de c2
- Afficher la position de c1 dans c2
*/