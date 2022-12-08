import { useState } from 'react';
import {Peliculas,categorias} from '../mock'
import Item from '../Item/Item'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () => {
  const [item,setItem] = useState(Peliculas)
  const {id} = useParams()

  const FilterCategory = new Promise((resolve,eject)=>{
    setTimeout(()=>{
      const newPeliculas = Peliculas.filter((p)=> p.category == id)
      resolve(newPeliculas)
    },2000)
  })

  useEffect(()=>{
    FilterCategory.then((response)=>{
      setItem({response})
    })
  },[id])
  return(
    <div className='itemlistcontainer'>
      {
        item.map((producto)=>{
          return <Item producto={producto} />
        })
      }
    </div>
  )
};

export default ItemListContainer;