import React from 'react';
import Buttone from './Buttone';
import ReactDOM from 'react-dom';
import './Error.css';
const Backdrop=(props)=>{
  return <div className="backdrop" onClick={props.onConfirm}/>;
  
};
const ModalOverlay=(props)=>{
    return(
  
   
    <div className='backdrop' >
      
      <header className='header'>
        <h2>{props.title}</h2>
      </header>
      <div className='content'>
      <p>{props.message}
      </p>
      </div>
      <footer className='actions'>
      <Buttone onClick={props.onConfirm}>Okay</Buttone></footer>
</div>
    
);
}
function Error(props){
  return(
<React.Fragment>
  {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}></Backdrop>,
                        document.getElementById("backdrop-root"))}
  {ReactDOM.createPortal(<ModalOverlay 
                           title={props.title}
                           message={props.message}
                           onConfirm={props.onConfirm}></ModalOverlay>,
                        document.getElementById("overlay-root"))}
</React.Fragment>
    );
}
export default Error;