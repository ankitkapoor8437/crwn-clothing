// // import React from 'react';
// // import './App.css';

// import { Routes, Route} from 'react-router-dom';
// import Navigation from './pages/navigation/navigation.component';

// import Homepage from './pages/homepage/homepage.component';
// // import ShopPage from './pages/shop/shop.component';
// //import Header from './components/header/header.component';
// // import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


// const App = () => {
//   return (
//     //<Header />
//     <Routes>
//       <Route path='/' element={<Navigation/>}>

//         {/* <Route index element={<Homepage />} /> */}
//         <Route path='/shop' element={<shop />} />

//       </Route>
//       {/* <Route path='/signin' element = {SignInAndSignUpPage} /> */}
//     </Routes>

//   );
// }

// export default App;


import { Routes, Route } from 'react-router-dom';
import Authentication from './pages/authentication/authentication.component';

import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';
//import SignIn from './pages/sign-in/sign-in.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        {/* <Route path='shop' element={<Shop />} /> */}
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;