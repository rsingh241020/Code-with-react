import { useState } from 'react'
import './App.css'
import Card from './component/Card'
function App() {
  const [count, setCount] = useState(0)
  let myObj= {
    username:"Rohit",
    age : 24
  }
  let arr=[4,5,3,6]
  return (
    <>
          <h1 className="text-3xl font-bold text-blue-600">
      Hello Tailwind!
    </h1>
    <h1 className ='bg-green-400 text-black p-4 rounded-xl mb-4'>Rohit Singh</h1>
    <Card userName ="chaiaurcode" />
    <Card/>    
    </>
  )
}

export default App
