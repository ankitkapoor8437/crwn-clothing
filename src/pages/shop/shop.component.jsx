// import React from "react";
// import SHOP_DATA  from "./shop.data";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// class ShopPage extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         collections: SHOP_DATA
//       };
//     }

//     render() {
//         const { collections } = this.state;
//         return (

//           <div className='shop-page'>
//             {collections.map(({ id, ...otherCollectionProps }) => (
//               <CollectionPreview key={id} {...otherCollectionProps} />
//             ))}
//           </div>
//         );
//       }
//     }

//     export default ShopPage;

//after implimenting nested routing
// import { UserContext } from "../../contexts/user.context";
// import { CategoriesContext } from "../../contexts/categories.context";
// import { useContext, Fragment } from "react";
// import ProductCard from "../../components/product-card/product-card.component";
// import CategoryPreview from "../../components/category-preview/category-preview.component";

import { Routes, Route } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {

  // After nested routing
  // const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
        <Route  index element={<CategoriesPreview />}/>
        <Route  path=":category" element={<Category />}/>

    </Routes>
  );
};


export default Shop;
