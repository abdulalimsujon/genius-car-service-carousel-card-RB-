import React from 'react';




import expert1 from '../../../../../../images/expert-1.jpg'
import expert2 from '../../../../../../images/expert-2.jpg'
import expert3 from '../../../../../../images/expert-3.jpg'
import expert4 from '../../../../../../images/expert-4.jpg'
import expert5 from '../../../../../../images/expert-5.jpg'
import expert6 from '../../../../../../images/expert-6.png'
import EExport from '../../../../../About/EExport';


const experts = [
    { id: 1, name: 'will smith', img: expert1 },
    { id: 2, name: 'will smith', img: expert2 },
    { id: 3, name: 'will smith', img: expert3 },
    { id: 4, name: 'will smith', img: expert4 },
    { id: 5, name: 'will smith', img: expert5 },
    { id: 6, name: 'will smith', img: expert6 }
]

const Experts = () => {


    return (
        < div className='container' >
            <h1 className='text-primary text-center'>Our experts</h1>
            <div className="row">
                {
                    experts.map(expert => <EExport
                        key={expert.id}

                        expert={expert}



                    ></EExport>)
                }


            </div>
        </ div >
    );
};

export default Experts;