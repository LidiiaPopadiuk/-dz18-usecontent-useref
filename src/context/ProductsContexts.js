import { createContext, useState } from "react";

export const ProductsContext = createContext(null)

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(['apple', 'banana', 'kiwi'])

    const addProducts = (product) => {
        setProducts(prev => [...prev, product])
    }

    return(
        <ProductsContext.Provider value={{products, addProducts}}>{children}</ProductsContext.Provider>
    )
}