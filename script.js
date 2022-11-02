
function heapify(arr){
    if (arr[0] != undefined) {
        let primerValor = arr[0];
        arr[0] = undefined;
        arr.push(primerValor);
    }
    let i = arr.length-1; 
    // console.log("el valor de I es " + i);
    
    let nodoPadre = Math.trunc(i / 2); 
    let hijoMenor = nodoPadre * 2; 
    let hijoMayor = (nodoPadre * 2) + 1; 
    // console.log("inicia con padre" + nodoPadre);
    // console.log("inicia con hijomayor " + hijoMayor);
    // console.log("inicia con hijomenor " + hijoMenor);
    while (nodoPadre > 0 ) {
        let guardaVal = arr[nodoPadre];
        // console.log(guardaVal);
        if (arr[nodoPadre] > arr[hijoMayor]) {
            arr[nodoPadre] = arr[hijoMayor];
            arr[hijoMayor] = guardaVal;
            // console.log("movio el hijomayor ");

        } else if (arr[nodoPadre] > arr[hijoMenor]) {
            arr[nodoPadre] = arr[hijoMenor];
            arr[hijoMenor] = guardaVal;
            // console.log("movio el hijomenor ");
        }
        nodoPadre = nodoPadre - 1;
        hijoMenor = nodoPadre * 2;  ;
        hijoMayor = (nodoPadre * 2) + 1;        
        // console.log(nodoPadre);
        // console.log("fin de ciclo");
    }
    console.log(arr);
}
    // salidas de muestras
    heapify([20, 3, 8, 14, 9, 6, 2]);
            //  1   2  3  4   5  6  7
    // altera el array a [undefined, 2, 6, 3, 9, 8, 14, 20]
    
