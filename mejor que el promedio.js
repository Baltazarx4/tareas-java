function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        }
var promedio = sum /arr.length

    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > promedio) {
        count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
