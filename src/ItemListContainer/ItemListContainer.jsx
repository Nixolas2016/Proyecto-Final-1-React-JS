import { useState } from 'react';
import {Peliculas,categorias} from '../mock'
import Item from '../Item/Item'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ItemListContainer = () => {
  const [item,setItem] = useState(Peliculas);
  const {id} = useParams()

  const FilterCategory = new Promise((resolve,eject)=>{
    if(id){
      const newPeliculas = Peliculas.filter((p)=> p.category == id)
      resolve(newPeliculas)
    }
    else{
      resolve(Peliculas)
    }
    
  })

  useEffect(()=>{
    FilterCategory.then((response)=>{
      setItem(response)
      console.log(response,item)
    })
  },[id])
  return(
    <div className='itemlistcontainer'>
      {
        item && item.map((producto)=>{
          return <Item producto={producto} />
        })
      }
    </div>
  )
};

export default ItemListContainer;