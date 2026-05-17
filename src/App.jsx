
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Available from './Components/Available/Available'
import Selected from './Components/Selected/Selected'
import { Suspense } from 'react'
import { useState } from 'react';

const bossesPromise = fetch('bosses.json')
  .then(res => res.json())

// const bossesPromise = async () =>{
//   const res =await fetch('bosses.json')
//   return res.json()}


function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <>
      <Navbar />
      <div className='flex justify-between items-center max-w-[1300px] mx-auto mb-5'>
        <h1 className='font-bold text-2xl text-amber-500'>Available Bosses</h1>
        <div>
          <button className='btn border-r-0 rounded-l-xl bg-yellow-700 font-semibold text-white py-6' onClick={() => setToggle(true)}>Available</button>
          <button className='btn border-l-0 rounded-r-xl bg-sky-900/50 font-semibold text-white py-6 ' onClick={() => setToggle(false)}>Selected <span>(0)</span></button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<span className=" loading loading-spinner text-warning"></span>}> <Available bossesPromise={bossesPromise} /></Suspense> : <Selected />
      }

    </>
  )
}

export default App
