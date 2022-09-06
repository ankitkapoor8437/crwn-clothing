import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import '../navigation/navigation.styles.scss';

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
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <div>
                        <CrownLogo className='logo'></CrownLogo>
                    </div>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        <div>
                            Shop
                        </div>
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutuser} > SIGN OUT </span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                <div>
                                    Sign In
                                </div>

                            </Link>
                        )
                    }
                    <CartIcon />

                </div>

                { isCartOpen  && <CartDropdown />}

            </div>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;