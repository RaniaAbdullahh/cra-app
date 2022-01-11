import logo from './logo.svg';
import './App.css';
import {useState,useEffect, useRef } from 'react'

function App() {

  const [counter,setCounter]=useState(0)
  const [name, setName] = useState("")

  useEffect (()=>{
    console.log('counter updated')
    //setCounter(counter +1)
    //alert('welcome to our app')
  },[counter])

  const firstMount = useRef(true)

  useEffect(()=>{
    console.log( 'before',firstMount.current)
    if (firstMount.current){
      firstMount.current = false 
      console.log( firstMount.current)
    }else{
      console.log('skip the mount but run any other update ')
      
    }  

        
  })







  // useEffect (()=>{
  //   console.log('name updated')
  // },[name])







  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick= {()=>{setCounter(counter +1 )}}>add</button>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <p>{name && `Hello ${name}`}</p>
     
    </div>
  );
}

export default App;
