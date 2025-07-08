import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h2>Hii This is ...</h2>

      <Login/>
      <Profile/>
    </UserContextProvider>
  )


}

export default App
