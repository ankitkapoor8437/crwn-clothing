// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';


// import SignUpForm from '../../components/sign-up-form copy/sign-up-form.component';
// import SignInForm from '../../components/sign-in-form/sign-in-form.component';


// const Authentication  = () => {
//     // useEffect(async () => {
//     //     const response = getRedirectResult(auth);
//     //     console.log(response);
//     // }, [])
//     return (
//         <div>
//             <h1>Sign In Page</h1>
//             {/* <button onClick={logGoogleUser}>Sign in with Google Popup</button> */}
//             <SignInForm/>
//             <SignUpForm/>
//             {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
//         </div>
//     );
// };

// export default Authentication;

import SignUpForm from '../../components/sign-up-form copy/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;