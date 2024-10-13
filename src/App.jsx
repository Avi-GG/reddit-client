import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './components/Error'
import Navbar from './components/Navbar'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/></>,
      errorElement: <Error/>
    }
  ])

  return (

    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
