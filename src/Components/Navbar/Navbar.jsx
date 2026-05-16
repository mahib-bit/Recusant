import 'react';
import NavImg from '../../assets/logo.png'
import Coin from '../../assets/dollar.png'

const Navbar = () => {
    return (
        <div className="navbar shadow-sm max-w-[1300px] mx-auto my-3">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img className='w-14'  src={NavImg} alt="Logo" />
                </a>
            </div>
            <div className="flex gap-1.5">
                <span>60000000000</span>
                <img className='w-6 h-6' src={Coin} alt="Coin" />
                <span> Coin</span>
            </div>
        </div>
    );
};

export default Navbar;