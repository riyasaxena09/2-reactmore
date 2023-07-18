import React,{ useState,useRef } from 'react';
import Error from './Error';
import Card from './Card';
import './Form.css';
function Form(props){

   const [error,setError]=useState();
  const nameInputRef=useRef();
    const ageInputRef=useRef();
 const collegeInputRef=useRef();
  
  function submit (e){
    e.preventDefault();
    const name=nameInputRef.current.value;
    const college=collegeInputRef.current.value;
     const age=ageInputRef.current.value;
    if(name.trim().length===0 || age.trim().length===0){
     setError({
        title:'invalid input',
        message:'plz enter correct input'
      });
      return;
    }
    if(+age<1){
        setError({
        title:'invalid age',
        message:'plz enter correct age greater than 0'
      });
      return;
    }
const obj={
  name:name,
  age:age,
  college:college
  
}
    props.onsave(obj);
    console.log(obj);
    nameInputRef.current.value=" ";
      ageInputRef.current.value=" ";
     collegeInputRef.current.value=" ";
  
}
  function Errorhandler(){
    setError(null);
  }
    return(
<Card className='formback'>
        {error &&  <Error title={error.title} message={error.message} onConfirm={Errorhandler}/>}
   <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
     UserName
    </label>
    <input
    
      ref={nameInputRef}
    
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
   Age
    </label>
    <input
    
      ref={ageInputRef}
      
      type="Number"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
      <div className="mb-3">
    <label htmlFor="exampleInputCollege1" className="form-label">
   CollegeName
    </label>
    <input
    
      ref={collegeInputRef}
      
      type="text"
      className="form-control"
      id="exampleInputCollege1"
    />
  </div>
 
  <button type="submit" className="b" >
    Submit
  </button>
</form>
</Card>
   
);
}
export default Form;