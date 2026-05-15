
import './App.css'
import NavImg from './assets/logo.png'
import Coin from './assets/dollar.png'

function App() {


  return (
    <>
  {/* Navbar----------------------------------------- */}

      <div className="navbar bg-base-100 shadow-sm max-w-[1400px] mx-auto my-3">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='w-[60px] h-[60px]' src={NavImg} alt="Logo" />
          </a>
        </div>
        <div className="flex gap-1.5">
          <span>60000000000</span>
          <img className='w-[20px] h-[20px]' src={Coin} alt="Coin" />
          <span> Coin</span>
        </div>
      </div>
    </>
  )
}

export default App
