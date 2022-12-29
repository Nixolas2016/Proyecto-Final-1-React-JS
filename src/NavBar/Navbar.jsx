import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import ThemeButton from '../ThemeButton/ThemeButton';
import './Navbar.css'


const NavBar = ({menus, categorias}) =>{
    const {color} = useContext(ThemeContext)
    return(

    <div className='navbar' style={{backgroundColor:color}}>
      {
        menus.map((menu)=>{
          <li key={menu.toString()}>
            {menu}
          </li>
          return <Link className='navbar__menu' to=
          {menu.href} >{menu.name}</Link>
        })
      }
      {
        categorias.map((categoria)=>{
          <li key={categoria.toString()}>
          {categoria}
        </li>
          return <Link to={`/category/${categoria.id}`}>{categoria.name}</Link>
        })
      }
      <ThemeButton />
  </div>)
}

export default NavBar;