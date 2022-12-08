import { Link } from 'react-router-dom';

const NavBar = ({menus, categorias}) =>{
    return(

    <div className='navbar'>
      {
        menus.map((menu)=>{
          return <Link className='navbar__menu' to=
          {menu.href} >{menu.name}</Link>
        })
      }
      {
        categorias.map((categoria)=>{
          return <Link to={`/category/${categoria.id}`}>
          {categoria.name}</Link>
        })
      }
  </div>)
}

export default NavBar;