import React from 'react';
import './Show.css';
function Show(props){
  return(
    <div>
    
    <div className='col-8 seprow'>{props.products.name}({props.products.age}year old)</div>
      
      </div>
  );
}
export default Show;