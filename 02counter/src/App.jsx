import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  let [errorMessage,setErrorMessage] = useState('');
  // let counter =5;

  const addValue = () =>{
  
    //counter = counter+1;
    if(counter<20){
    setCounter(counter+1)
    setErrorMessage('')
    }
    else{
     setErrorMessage("Number is More Then 20")
    }
  }
  const removeValue = () =>{
    if(counter>0){
    setCounter(counter-1);
    setErrorMessage('')
    }
    else{
      setErrorMessage ("Number is Less Then 0");
    }
  }

  return (
    <>

      <h1>Chai Aur React.</h1>
      <h3>Counter Value: {counter}</h3>

      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={removeValue}
      >Remove Value: {counter}</button>
      <br />
      {errorMessage }
      <p>Footer: {counter}</p>

    </>
  )
}

export default App
