function fibonacci(n) {
    var resultado = [];

    if (n >= 1) {
        resultado.push(0);
    }
    if (n >= 2) {
        resultado.push(1);
    }

    for (let i = 2; i < n; i++) {
        var ultimo = resultado[i - 1];
        var penultimo = resultado[i - 2];
        resultado.push(ultimo + penultimo);
    }

    return resultado;
}

var longitudDeseada = 10;
var secuenciaFibonacci = fibonacci(longitudDeseada);
console.log(secuenciaFibonacci);