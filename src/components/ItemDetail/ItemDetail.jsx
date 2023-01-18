import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail =({producto})=>{
const {addCount} = useContext(CartContext)

    const handlerAddCount =(count)=>{
        console.log({paso:1,count, producto})
        addCount(count,producto[0])
    }
    return(
        <div>
            <h1>{producto[0].name}</h1>
            <h2>Categoria: {producto[0].cate}</h2>
            <h3>Descripción: {producto[0].description}</h3>
            <img src={producto[0].img} width={279} height={402}/>
            <h2>Precio: {producto[0].price}</h2>
            <ItemCount onChangeCount={(e)=>handlerAddCount(e)} />
        </div>
    )
}

export default ItemDetail;