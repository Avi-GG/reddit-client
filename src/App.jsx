import { useState } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './components/Error'
import Navbar from './components/Navbar'
import Main from './components/Main'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar/><Main/></>,
      errorElement: <Error/>
    }
  ])

  return (

    <div className="bg-gray-800 w-full min-h-screen">

      <RouterProvider router={router}/>
 
    </div>
  )
}

export default App
