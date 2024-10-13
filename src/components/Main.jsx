import React from 'react'
import { useState } from 'react'

const Main = () => {
    const [isOpen, setIsOpen] = useState(false);

    const showPop =()=>{
        setIsOpen(true);
    }
    const closePop =()=>{
        setIsOpen(false);
    }

  return (
    <div className='min-h-screen w-full relative'>
       <button className='rounded-[50%] h-12 w-12 bg-lime-400' onClick={showPop} >
            <span className='font-bold text-3xl'>+</span>
        </button>
     {isOpen &&  <div className='h-60 w-80 bg-white rounded-lg absolute left-0 right-0 m-auto' >
        <span className='absolute right-3 font-bold cursor-pointer' onClick={closePop}>X</span>
         <input type='text' className='p-4 mx-16 my-16' placeholder='Search for posts...' />
         <button type='submit' className='rounded-lg h-10 w-20 border-2 border-teal-400 bg-teal-400 text-white mx-32 '> search</button>
       </div>
       }
    </div>
  )
}

export default Main