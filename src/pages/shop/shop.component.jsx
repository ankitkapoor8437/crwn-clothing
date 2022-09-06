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
import { ProductsContext } from "../../contexts/products.context";
import { useContext } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';


const Shop = () => {
  const { products } = useContext(ProductsContext)
    return (
      <div className="products-container">
        {products.map((product) => (
         <ProductCard key={product.id}  product={product}/>
        ))}
      </div>
    )
}


export default Shop;
