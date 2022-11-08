import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles';

import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signOutuser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import CartDropdown from '../../components/card-dropdown/cart-dropdown.component';

// import { signOutuser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    const { isCartOpen } = useContext(CartContext)

    // const signOutHandler = async () => {
    //     await signOutuser();
    //     setCurrentUser(null);

    // }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <div>
                        <CrownLogo className='logo'></CrownLogo>
                    </div>
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>SHOP</NavLink>

                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutuser} > SIGN OUT </NavLink>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                <div>
                                    Sign In
                                </div>

                            </Link>
                        )
                    }
                    <CartIcon />

                </NavLinks>

                {isCartOpen && <CartDropdown />}

            </NavigationContainer>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;