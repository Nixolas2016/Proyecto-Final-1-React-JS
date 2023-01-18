import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () =>{
    const {count} = useContext(CartContext)

    return(
        <div>
            <img className='cart__logo' src="https://img.icons8.com/glyph-neue/2x/shopping-cart.png" width={100} height={100}/>
            <div className='cart__count'>
                <p>{count}</p>
            </div>
            <Link to="/cart"> Pasar a Finalizar Compra </Link>

        </div>

    )
}
export default Cart;