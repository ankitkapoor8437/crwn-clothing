import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import '../navigation/navigation.styles.scss';

import { UserContext } from '../../contexts/user.context';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    
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
                    <Link className='nav-link' to='/auth'>
                        <div>
                            Sign In
                        </div>

                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>

    );
};

export default Navigation;