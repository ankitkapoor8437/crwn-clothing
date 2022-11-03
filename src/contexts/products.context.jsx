import { useState } from "react";
import { createContext, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    product: [],


});

export const ProductsProvider = ({ children }) => {
    const [products, setProduct] = useState([]);

    // useEffect(()=>
    // {
    //         addCollectionAndDocuments("categories",SHOP_DATA);
    // }, []);


    const value = {products};
    return (
        <ProductsContext.Provider value={ value } >{children}</ProductsContext.Provider>
    )
}