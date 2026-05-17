
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Available from './Components/Available/Available'
import Selected from './Components/Selected/Selected'
import { Suspense } from 'react'

const bossesPromise = fetch('bosses.json')
  .then(res => res.json())

// const bossesPromise = async () =>{
//   const res =await fetch('bosses.json')
//   return res.json()}


function App() {

  return (
    <>
      <Navbar />
      <Suspense fallback={<span className="loading loading-spinner text-warning"></span>}>
        <Available bossesPromise={bossesPromise} />
      </Suspense>
      <Selected />

    </>
  )
}

export default App
