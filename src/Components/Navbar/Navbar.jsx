import 'react';
import NavImg from '../../assets/logo.png'
import Rune from '../../assets/rune.png'

const Navbar = () => {
    return (
    <>  <div className="navbar shadow-md max-w-[1300px] mx-auto my-3">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img className='w-14' src={NavImg} alt="Logo" />
                </a>
            </div>
            <div className="flex gap-1.5">
                <span>60000000000</span>
                <img className='w-6 h-6' src={Rune} alt="Rune" />
                <span> Runes</span>
            </div>

        </div>
     </>
    );
};

export default Navbar;