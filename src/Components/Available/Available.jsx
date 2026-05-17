import { use } from 'react';
import Battleicon from '../../assets/battle.png';
import Rune from '../../assets/rune.png';

const Available = ({ bossesPromise }) => {

    const bossesData = use(bossesPromise);

    return (

        <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 justify-items-center'>
            {
                bossesData.map((boss) => (
                    <div key={boss.id}
                        className="max-w-[400px] rounded-2xl border-1 text-yellow-600 ">
        {/*Hover Effect on Image */}
                        <div className='hover-3d'>
                        <figure className="max-w-100 rounded-2xl">
                            <img
                                className='w-full h-64 object-cover rounded-2xl'
                                src={boss.image}
                                alt={boss.name}
                            />
                        </figure>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        </div>
        {/* Hover Effect end */}
                            <div className='p-4'>
                                <div className='flex items-center gap-2 mb-3'>
                                    <img
                                        className='w-5 h-5'
                                        src={Battleicon}
                                        alt="battle"
                                    />
                                    <h2 className='text-xl font-bold'>
                                        {boss.name}
                                    </h2>
                                </div>

                                <div className='flex justify-between items-center border-b pb-3 mb-3'>
                                    <p className='text-sm'>
                                        <span className='font-semibold'>Place:</span> {boss.place}
                                    </p>
                                    <button className='btn btn-sm'>
                                        {boss.role}
                                    </button>
                                </div>

                                <div>
                                    <p><span className='font-semibold'>Rating:</span> {boss.rating}
                                    </p>

                                    <p><span className='font-semibold'>Immunity:</span> {boss.immunity}
                                    </p>

                                    <p><span className='font-semibold'>Weakness:</span> {boss.weakness}
                                    </p>
                                </div>

                                <div className='flex justify-between items-center mt-5'>
                                    <p className='text-lg font-bold flex justify-between items-center'>
                                        {boss.price} <img className='w-7 h-7' src={Rune} alt="Rune" />
                                    </p>

                                    <button className='btn bg-sky-900/50 text-white'>
                                        Choose
                                    </button>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>

    );
};

export default Available;