import React,{ useState } from 'react';
import Error from './Error';
import Card from './Card';
import './Form.css';
function Form(props){
  const [name,setname]=useState('');
    const [age,setage]=useState('');
   const [error,setError]=useState();
function namehandler (e){

  setname(e.target.value);
  
}
  function agehandler (e){
  setage(e.target.value);
}
  function submit (e){
    e.preventDefault();
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
  age:Number(age)
}
    props.onsave(obj);
    console.log(obj);
    setname('');
    setage(' ');
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
      value={name}
      onChange={namehandler}
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
      value={age}
      onChange={agehandler}
      type="Number"
      className="form-control"
      id="exampleInputPassword1"
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