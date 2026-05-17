import 'react';
import NavImg from '../../assets/logo.png'
import Rune from '../../assets/rune.png'

const Navbar = () => {
    return (
    <>  <div className="navbar shadow-md max-w-[1300px] mx-auto my-3">
            <div className="flex-1">
                <a className="text-xl">
                    <img className='w-14' src={NavImg} alt="Logo" />
                </a>
            </div>
            <div className="flex btn btn-ghost text-2xl font-bold text-sky-800 gap-1.5">
                <span>70000000000</span>
                <img className='w-7 h-7 mt-1' src={Rune} alt="Rune" />
                <span className='text-sky-800'> Runes</span>
            </div>

        </div>
     </>
    );
};

export default Navbar;