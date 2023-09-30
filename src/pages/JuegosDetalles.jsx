import React from 'react'
import { useParams } from 'react-router-dom'
import { Item } from '../components/Item';
import useFetch from '../customHooks/useFetch';

export const JuegosDetalles = () => {

    const { id } = useParams();
    const { productos } = useFetch('/juegos/juegos.json');

    const obtenerProducto = (id) => {
        return productos.find(producto => producto.id === id);
    }

    const productoElegido = obtenerProducto(id);

    return (
        <div className='divUlCardsContainer'>
            <ul className='ulCards'>
                {productoElegido && productoElegido.juegos.map((juego) => <Item
                    key={juego.id}
                    titulo={juego.name}
                    descripcion={juego.descripcion}
                    precio={juego.precio}
                    style={{ width: "18rem", height: "710px" }}>
                    <img className='imgProductos' src={juego.url} alt={juego.name} />
                </Item>)}
            </ul>
        </div>
    )
}
