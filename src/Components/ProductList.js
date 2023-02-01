import Product from "./Product";
import React from "react";
export default function ProductList(props){
    // console.log({props});
    return(
        props.productList.length>0 ?
        props.productList.map((product,i) => {
         return(
         <Product
          product={product}
           key={i}
            incrementQuantity={props.incrementQuantity}
            index={i}
            decrementQuantity={props.decrementQuantity}
            removeItem={props.removeItem}
           ></Product>
           );
            
        }) : <h1>Add some product to display</h1>
    
    );
}