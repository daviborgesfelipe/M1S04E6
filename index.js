function repeticaoWhile(){
    let contador = 0;
    let impares = 0
    while(impares < 10){
        while(contador % 2 == 1) {
            impares++;
            contador++;
            console.log('impares : ' + impares + ' contador : ' + contador)
        }
        contador++;
        console.log('impares : ' + impares + ' contador : ' + contador)
    }
}