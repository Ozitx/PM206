function listarProductos() {
    console.log("\nProductos disponibles:");
    for (let i = 0; i < productos.length; i++) {
        console.log(`${productos[i].id} - ${productos[i].nombre} - $${productos[i].precio} - ${productos[i].categoria}`);
    }
}

function buscarProductos(tipo) {
    let resultado = [];

    if (tipo === "baratos") {
        resultado = productos.filter(function(p) { return p.precio <= 100; });
    } else if (tipo === "caros") {
        resultado = productos.filter(function(p) { return p.precio > 100; });
    } else {
        resultado = productos.filter(function(p) { return p.categoria == tipo; })
    }

    if (resultado.length === 0) {
        console.log("No se encontraron productos");
    } else {
        resultado.forEach(function(p) {
            console.log(`${p.id} - ${p.nombre} - $${p.precio} - ${p.categoria}`);
        });
    }
}

function menuBuscar() {
    console.log("\n--- BUSCAR ---");
    console.log("1. Productos baratos (menos de $1000)");
    console.log("2. Productos caros (más de $100)");
    console.log("3. Bebidas");
    console.log("4. Postres");
    console.log("0. Volver");

    terminal.question("Opción: ", function(opcion) {
        if      (opcion == "1") { buscarProductos("baratos");  menuBuscar(); }
        else if (opcion == "2") { buscarProductos("caros");    menuBuscar(); }
        else if (opcion == "3") { buscarProductos("bebida");   menuBuscar(); }
        else if (opcion == "4") { buscarProductos("postre");   menuBuscar(); }
        else if (opcion == "0") { menuCocina(); }
        else                    { menuBuscar(); }
    });
}

const promociones = [];
let idPromocion = 1;

function verPromociones() {
    if (promociones.length === 0) {
        console.log("No hay promociones.");
        return;
    }
    promociones.forEach(function(p) {
        console.log(`${p.id} - ${p.descripcion}`);
    });
}

function agregarPromocion() {
    listarProductos();
    terminal.question("ID del producto: ", function(idBuscar) {
        const producto = productos.find(function(p) { return p.id == idBuscar; });

        if (!producto) {
            console.log("Producto no encontrado.");
            menuPromociones();
            return;
        }

        console.log("\nTipo de promoción:");
        console.log("1. 2x1");
        console.log("2. Descuento (%)");

        terminal.question("Opción: ", function(tipo) {
            if (tipo == "1") {
                const promo = {
                    id:          idPromocion,
                    producto:    producto.nombre,
                    tipo:        "2x1",
                    descripcion: `${producto.nombre} al 2x1`
                };
                promociones.push(promo);
                idPromocion++;
                console.log(`Promoción agregada: ${promo.descripcion}`);
                menuPromociones();
            }
            else if (tipo == "2") {
                terminal.question("¿Qué % de descuento?: ", function(descuento) {
                    const promo = {
                        id:          idPromocion,
                        producto:    producto.nombre,
                        tipo:        "descuento",
                        descuento:   descuento,
                        descripcion: `${producto.nombre} con ${descuento}% de descuento`
                    };
                    promociones.push(promo);
                    idPromocion++;
                    console.log(`Promoción agregada: ${promo.descripcion}`);
                    menuPromociones();
                });
            }
            else {
                console.log("Opción inválida.");
                menuPromociones();
            }
        });
    });
}

function menuPromociones() {
    console.log("\n--- PROMOCIONES ---");
    console.log("1. Agregar promoción");
    console.log("2. Ver promociones");
    console.log("0. Volver");

    terminal.question("Opción: ", function(opcion) {
        if (opcion == "1") {
            agregarPromocion();
        }
        else if (opcion == "2") {
            verPromociones();
            menuPromociones();
        }
        else if (opcion == "0") {
            menuCocina();
        }
        else {
            menuPromociones();
        }
    });
}

function menuCocina() {
    console.log("\n--- COCINA ---");
    console.log("1. Agregar");
    console.log("2. Editar");
    console.log("3. Eliminar");
    console.log("4. Listar");
    console.log("5. Buscar");
    console.log("6. Promociones");
    console.log("0. Volver al inicio");

    terminal.question("Opción: ", function(opcion) {
        if (opcion == "1") {
            terminal.question("Nombre del producto: ", function(nombre) {
                terminal.question("Precio: $", function(precio) {
                    terminal.question("Categoría (bebida/postre/otro): ", function(categoria) {
                        const nuevoProducto = {
                            id: idProducto,
                            nombre: nombre,
                            precio: parseFloat(precio),
                            categoria: categoria
                        };
                        productos.push(nuevoProducto);
                        idProducto++;
                        console.log("Producto agregado.");
                        menuCocina();
                    });
                });
            });
        }
        else if (opcion == "2") {
            listarProductos();
            terminal.question("ID a editar: ", function(idBuscar) {
                const producto = productos.find(function(p) { return p.id == idBuscar; });

                if (!producto) {
                 console.log("No encontrado.");
                 menuCocina();
                 return;
                }

                terminal.question("Nuevo nombre: ", function(nuevoNombre) {
                    terminal.question("Nuevo precio: $", function(nuevoPrecio) {
                        terminal.question("Nueva categoría: ", function(nuevaCategoria) {
                            producto.nombre    = nuevoNombre;
                            producto.precio    = parseFloat(nuevoPrecio);
                            producto.categoria = nuevaCategoria;
                            console.log("Producto actualizado.");
                            menuCocina();
                     });
                    });
                });
            });
        }
        else if (opcion == "3") {
            listarProductos();
            terminal.question("ID a eliminar: ", function(idBuscar) {
                const pos = productos.findIndex(function(p) { return p.id == idBuscar; });

                if (pos === -1) {
                    console.log("No encontrado.");
                    menuCocina();
                 return;
                }

                productos.splice(pos, 1);
                console.log("Producto eliminado.");
                menuCocina();
            });
        }
        else if (opcion == "4") {
            listarProductos();
            menuCocina();
        }
        else if (opcion == "5") {
            menuBuscar();
        }
        else if (opcion == "0") {
            menuPrincipal();
        }
        else if (opcion == "6"){
            menuPromociones();
        }
        else {
            menuCocina();
        }
    });
}