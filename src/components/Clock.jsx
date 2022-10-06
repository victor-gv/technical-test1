//Create a clock that displays current: year, month, day, hour, minute, second. It should update every second.

import React, {useState, useEffect} from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div className='flex flex-row text-white'>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Year</span>
                <span >
                    {date.getFullYear()}
                </span>
            </div>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Month</span>
                <span >
                    {date.getMonth() + 1}
                </span>
            </div>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Day</span>
                <span >
                    {date.getDate()}
                </span>
            </div>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Hours</span>
                <span >
                    {date.getHours()}
                </span>
            </div>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Minutes</span>
                <span >
                    {date.getMinutes()}
                </span>
            </div>
            <div className='flex flex-col justify-center items-center border-double border-2 border-yellow-300 p-3 mr-2'>
                <span className='font-bold'>Seconds</span>
                <span >
                    {date.getSeconds()}
                </span>
            </div>
        </div>
    );
}

export default Clock;