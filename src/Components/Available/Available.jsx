import { use } from 'react';
import BossCard from '../BossCard/BossCard';

const Available = ({ bossesPromise , selectedBosses, setSelectedBosses, setBalance , balance}) => {

    const bossesData = use(bossesPromise);

    return (

        <div className='max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 justify-items-center'>
            {
                bossesData.map((boss) => (
                    <BossCard selectedBosses={selectedBosses} setSelectedBosses={setSelectedBosses} setBalance={setBalance} balance={balance} boss={boss} key={boss.id} />
                ))
            }
        </div>

    );
};

export default Available;