import { useState } from "react";
import { Children, createContext } from "react";

import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    product: [],


});

export const ProductsProvider = ({ children }) => {
    const [products, setProduct] = useState(PRODUCTS);
    const value = {products};
    return (
        <ProductsContext.Provider value={ value } >{children}</ProductsContext.Provider>
    )
}