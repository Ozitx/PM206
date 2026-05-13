console.log("Hola mundo JS desde el servidor")

/* Operaciones */
let edad1= 11
const edad2= 42

console.log("Edad promedio")
console.log((edad1 + edad2)/2)

/* Medir el tiempo de un proceso */
console.time('miproceso')
    for(let i=0; i < 1000000; i++){}
console.timeEnd('miproceso')

/* Objetos tipo tabla */
let usuarios= [
    {nombre: "cynthia", Edad:20},
    {nombre: "Ozitx", Edad:21}
]
console.table(usuarios)