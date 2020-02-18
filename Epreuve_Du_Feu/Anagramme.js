const fs = require('fs'); // Nécessaire pour dire qu'il faut un File System
const c1 = process.argv[2]
const c2 = fs.readFileSync("./" + process.argv[3],"utf8").split("\n");

function nettoyageString(str) {
    return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
}

function isAnagram(c1, c2) {
    var TabAnnagr = [];
    for(var i=0; i < c2.length; i++)
        if (nettoyageString(c1) == nettoyageString(c2[i])){
            TabAnnagr.push(c2[i]);
        } 
        console.log(TabAnnagr)
}

isAnagram(c1,c2);

/* 1 : Définir les arguments 
2 : Transformer la liste de mots en array
3 : Alphabetiser et nettoyer le premier argument et le tableau (deuxième argument)
4 : Comparer le premier argument nettoyé avec chaque élément nettoyé du tableau
5 : Afficher les éléments étant considérés comme anagrammes sous leur forme non nettoyée dans un tableau
*/