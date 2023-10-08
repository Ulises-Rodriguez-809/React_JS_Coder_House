export const obtenerProducto = (id,productos,paramsLength) => {
    if (paramsLength) {
        return productos.find(producto => producto.id.toString() === id);
    } else {
        return productos.find(producto => producto.id.toString() === id);
    }
}