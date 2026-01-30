import x from './ProductsList.module.css'
import { useContext, useRef } from "react";
import { ProductsContext } from "../context/ProductsContexts";
export const ProductList = () => {
    const { products, addProducts } = useContext(ProductsContext)
    console.log(products);

    const inputRef = useRef(null)
    const inputInfo = (e) => {
        e.preventDefault()
        
        if(!inputRef.current.value) return
        addProducts(inputRef.current.value)
        inputRef.current.value = ''
    }

    return (
        <div className={x.main}>
            <form className={x.form} onSubmit={inputInfo}>
                <input className={x.input} ref={inputRef} type="text" placeholder="Add something here!"/>
                <button className={x.button} type="submite">Send</button>
            </form>
            <ul className={x.list}>
                {products.map(product => {
                    return <li className={x.item}>{product}</li>
                })}
            </ul>
        </div>
    )
} 