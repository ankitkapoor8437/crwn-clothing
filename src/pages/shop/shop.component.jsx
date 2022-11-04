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


import { UserContext } from "../../contexts/user.context";
import { CategoriesContext } from "../../contexts/categories.context";
import { useContext, Fragment } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';


const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {
        Object.keys(categoriesMap).map((title) => ( 
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        ))}
    </Fragment>
  );
};


export default Shop;
