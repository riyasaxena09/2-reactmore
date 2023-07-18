import React from 'react';
import classes from './Card.css';
const Card=(props)=>{
  return <div className={`${classes.card} ${classes.formback}`}>{props.children}</div>
    
};
export default Card;