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
<<<<<<< HEAD
      element: <><Navbar/><Main/></>,
=======
      element: <><Navbar/><Main /></>,
>>>>>>> 4fc4f1fcba4d79b59dc91cdff6110d193c9c1a1f
      errorElement: <Error/>
    }
  ])

  return (

    <div className="bg-gray-800 w-full min-h-screen">
<<<<<<< HEAD

      <RouterProvider router={router}/>
 
=======
        <RouterProvider router={router}/>
>>>>>>> 4fc4f1fcba4d79b59dc91cdff6110d193c9c1a1f
    </div>
  )
}

export default App
