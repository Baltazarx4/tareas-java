function siempreHambriento(arr){
    let tengohambre = true;
    for(let i =0; i<arr.length;i++){
        if(arr[i]  === "comida"){
            console.log("delicioso");
            tengohambre = false;
        }
    }
    if (tengohambre){
        console.log("Tengo hambre");
    }
}
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);