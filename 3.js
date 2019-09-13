//valores
const arr = [3, 24, 12, 58, 10, 67, 40, 43];
let numeromayor = 0;
// recorrer array
for (let i = 0; i < arr.length; i++) {
    //si es mayor a
    if (arr[i] > numeromayor) {

        return numeromayor = arr[i];
    }
}
console.log(numeromayor);