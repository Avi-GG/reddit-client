import React from 'react'

const Main = () => {
  return (
    <div className='min-h-screen w-full relative'>
       <button className='rounded-[50%] h-12 w-12 bg-lime-400'><span className='font-bold text-3xl'>+</span></button>
       <div className='h-60 w-80 bg-white rounded-lg absolute left-0 right-0 m-auto'>
         <input type='text' className='p-4 mx-16 my-16' placeholder='Search for posts...' />
         <button type='submit' className='rounded-lg h-10 w-20 border-2 border-teal-400 bg-teal-400 text-white mx-32 '> search</button>
       </div>
       
    </div>
  )
}

export default Main
