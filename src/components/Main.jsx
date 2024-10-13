import React, { useState } from 'react'


const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='min-h-screen w-full bg-orange-400'>
     <button className='rounded-[50%] h-20 w-20 bg-red-600 text-center'>
            <span className='text-5xl '>+</span>
     </button>
     <div className=' flex items-center justify-center h-screen'>

        <div className='h-60 w-80 bg-red-700 rounded-lg absolute '></div>
   
     </div>
    </div>
  )
}

export default Main
