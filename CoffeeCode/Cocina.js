const readline = require("readline"); //leer lo de la consola

const rl = readline.createInterface({ //creamos la interfaz de lectura
  input: process.stdin,
  output: process.stdout,
});

function preguntar(texto) { //funcion de pregunats
  return new Promise((resolve) => rl.question(texto, resolve));
}

//realizacion de lista de productos
let productos = [];
let id = 1;

//funcion para listarlos
function listarProductos() {
  if (productos.length === 0) {
    console.log("No hay productos.");
    return;
  }
  productos.forEach((p) => {
    console.log(p.id + " - " + p.nombre + " - $" + p.precio);
  });
}

//agregar unmo nuevo
async function agregarProducto() {
  const nombre = await preguntar("Nombre: ");
  const precio = await preguntar("Precio: ");
  productos.push({ id: id, nombre: nombre, precio: precio });
  id++;
  console.log("Producto agregado.");
}

//editar producto
async function editarProducto() {
  listarProductos();
  const idBuscar = await preguntar("ID a editar: ");
  const pos = productos.findIndex((p) => p.id == idBuscar);
  if (pos === -1) {
    console.log("No encontrado.");
    return;
  }
  const nombre = await preguntar("Nuevo nombre: ");
  const precio = await preguntar("Nuevo precio: ");
  productos[pos].nombre = nombre;
  productos[pos].precio = precio;
  console.log("Producto actualizado.");
}

//eliminar producto
async function eliminarProducto() {
  listarProductos();
  const idBuscar = await preguntar("ID a eliminar: ");
  const pos = productos.findIndex((p) => p.id == idBuscar);
  if (pos === -1) {
    console.log("No encontrado.");
    return;
  }
  productos.splice(pos, 1);
  console.log("Producto eliminado.");
}

//mostrar menu
async function menu() {
  let activo = true;
  while (activo) {
    console.log("\n--- COCINA ---");
    console.log("1. Listar");
    console.log("2. Agregar");
    console.log("3. Editar");
    console.log("4. Eliminar");
    console.log("0. Salir");

    const opcion = await preguntar("Opción: ");

    if (opcion == "1") listarProductos();
    else if (opcion == "2") await agregarProducto();
    else if (opcion == "3") await editarProducto();
    else if (opcion == "4") await eliminarProducto();
    else if (opcion == "0") {
      activo = false;
      rl.close();
    } else {
      console.log("Opción inválida.");
    }
  }
}

menu();