import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import {CartDropdownContainer, EmptyMessage, cartItems} from './cart-dropdown.styles.jsx';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <cartItems>
                {
                    cartItems.length ? (cartItems.map((item) =>
                    (<CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <EmptyMessage>Your cart is empty.</EmptyMessage>
                    )
                }
            </cartItems>
            <Button buttonType='inverted' onClick={goToCheckoutHandler}>
                GO TO CHECKOUT
            </Button>
        </CartDropdownContainer>
    );
};

export default CartDropdown;