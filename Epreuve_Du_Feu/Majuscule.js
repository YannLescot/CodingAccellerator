var phrase = process.argv[2];
majuscule(phrase)
var phraseModifiee="";

function majuscule(phrase){
    for (i=0; i< phrase.length; i++){
        if(i==0){
            phraseModifiee = phrase.charAt(i).toLowerCase();
        } else {
            if(phraseModifiee[phraseModifiee.length-1] == phraseModifiee.charAt(phraseModifiee.length-1).toLowerCase()){ //length -1 car on enlève la diff entre l'index et le nb de caractère
                phraseModifiee = phraseModifiee + phrase.charAt(i).toUpperCase(); //A chaque lettre modifiée, PhrModif se transforme, et une lettre par une lettre, finit par nous donner la phrase entière
            } else if (phrase.charAt(i) == " "){ // On prend en compte les espaces
                phraseModifiee = phraseModifiee + phrase.charAt(i)
            } else {
                phraseModifiee = phraseModifiee + phrase.charAt(i).toLowerCase();
            }
        }
    }
    console.log(phraseModifiee)

    }

/*
1 : mettre la premiè-re lettre en minuscule
2 : ignorer les espaces
3 : faire en sorte que chaque lettre à partir de la 2e soit lopposée de celle davant (maj min)
4 : afficher la phrase modifiée
*/