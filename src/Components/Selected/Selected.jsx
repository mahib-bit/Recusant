import Battleicon from '../../assets/battle.png';
import 'react';

const Selected = ({ selectedBosses, removeBoss }) => {

    return (

        <div className='max-w-[1300px] mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between items-center'>
                {selectedBosses.map((boss) => (
                    <div key={boss.id}
                        className="max-w-[400px] rounded-2xl border-1 text-yellow-600 ">

                        <div className='hover-3d'>
                            <figure className="max-w-100 rounded-2xl">
                                <img
                                    className='w-full h-64 object-cover rounded-2xl'
                                    src={boss.image}
                                    alt={boss.name}
                                />
                            </figure>
                        </div>

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
                                <p>
                                    <span className='font-semibold'>Rating:</span> {boss.rating}
                                </p>

                                <p>
                                    <span className='font-semibold'>Immunity:</span> {boss.immunity}
                                </p>

                                <p>
                                    <span className='font-semibold'>Weakness:</span> {boss.weakness}
                                </p>
                            </div>
                        </div>

                        <div
                            onClick={() => removeBoss(boss)}
                            className='flex justify-around items-center'
                        >
                            <h1 className='font-bold text-2xl btn mb-2'>X</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selected;