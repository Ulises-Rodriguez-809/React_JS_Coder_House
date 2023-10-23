# Proyecto Final React JS (e-commerce)

## Nombre de la pagina: *La Friki Cueva*

### Dependencia extras por npm:
1. Bootstrap
2. Firebase
3. React Router DOM
4. Sweetalert2

### Ideas/Enfoques:
1. En App.jsx se ecnuentra el wrapper del contexto para que todos los componentes hijos puedan acceder a las vairiables como "cliente" o "cart" y el ruteo de las diferentes pages

2. Dentro del contexto esta la informacion del cliente (que se modifica al completar el formulario de compra) y el cart (que es donde se van guardando los productos y el precio total)

3. Las funciones usadas dentro de los componentes Home, Figura, ConsolaDettale, JuegosDetalle:
    
    1. cargar es una funcion para mostrar el mensaje de cargando los productos y el spinner (componente Loading), luego de pasar el tiempo se muestran toda la lista de productos

    2. useGetFSC es un hook perzonalizado que se encarga se encarga de obtener los productos cargados en firestore (dependiendo cual sea el el string que se le pase como argumento). La idea de crear un hook personalizado fue debido a que el codigo dentro del hook se repetia en muchos componentes y de esta manera el codigo dentro de cada componente quedaba mas limpio y no era necesario escribir el mismo codigo varias veces

4. El 