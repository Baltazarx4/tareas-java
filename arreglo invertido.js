function reverse(arr) {
    var arregloinvertido =[];
    for(var i = arr.length - 1; i >= 0; i--){
        arregloinvertido.push(arr[i]);
    }

    return arregloinvertido;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
