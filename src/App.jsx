import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './components/Search'

function App() {
  let [store , setStore ] = useState()
  return (
    <>

      <Search/>
    </>
  )
}

export default App
