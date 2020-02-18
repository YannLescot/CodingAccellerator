//Sudokusolver
function twoNull(arr, ind, ind2){
    let ligneSorted = [];
    let colonneSorted = [];
    let carreSorted = [];
    ligneSorted.push(RecupLigne(arr, ind));
    ligneSorted[0].sort(function(a, b){return a-b});
    colonneSorted.push(RecupColonne(arr, ind));
    colonneSorted[0].sort(function(a, b){return a-b});
    carreSorted.push(RecupCarre(arr, ind));
    carreSorted[0].sort(function(a, b){return a-b});
    console.log(ligneSorted, colonneSorted, carreSorted);
}

function RecupLigne(arr, ind){
    var lig=[];
    for (let i = 0; i < 9 ; i++){
            let lign = arr[ind][i];
            lig.push(lign);
    }
        return lig
}

function RecupColonne(arr, ind){
    var col=[];
    for (let i = 0; i < 9 ; i++){
            let colo = arr[i][ind];
            col.push(colo);
    }
        return col
}

function RecupCarre(arr, ind){
    var car=[];
    for (let i = 0; i < 3 ; i++){
        for(let j = 0; j < 3; j++){
            let carr = arr[i][j];
            car.push(carr);
        }
    }
        return car
}