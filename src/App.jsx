import react from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'
import Block1 from "./components/Block1.jsx";

function App() {
  return (
    <>
        <Block1/>
   <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
