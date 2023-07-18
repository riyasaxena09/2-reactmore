import './App.css'

import React, { useState } from 'react';
import Form from './Form'
import List from './List'
export default function App() {
  const products=[
    {
      name:"Riya",
      age:21
    },
     {
      name:"Gauri",
      age:24
    }
  ]

  const [p,setp]=useState(products);
 
function savedata(data){
  let newdata=[...p,data];
  setp(newdata);
}
  return (
    <div className='body'>
    
    <main>
  <Form onsave={savedata}></Form>
      
    </main>
    <List products={p}></List>
    </div>
  );
}
