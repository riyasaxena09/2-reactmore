import React from 'react';
import Show from './Show';
function List(props){
  return(
   props.products.map((products,i)=>{
    return <Show products={products} key={i}></Show>
   
   })
  );
}
export default List;