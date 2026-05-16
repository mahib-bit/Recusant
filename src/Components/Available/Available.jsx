import 'react';
import { use } from 'react';

const Available = ({ bossesPromise }) => {

    const bossesData = use(bossesPromise)
    console.log(bossesData)

    return (
        <div>
            
        </div>
    );
};

export default Available;