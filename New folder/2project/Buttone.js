import React from 'react';
import './Buttone.css';
function Buttone(props){
  return(
    <button className='button' onClick={props.onClick}>
      okay
      </button>
  )
}
export default Buttone;