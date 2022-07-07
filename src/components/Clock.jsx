import React from 'react';

const Clock = () => {
    const date = new Date().toLocaleTimeString();
    
    return (
        <div className='d-flex flex-column align-items-center justify-content-center h-25 w-50 clock'>
            <h1 >Clock</h1>
            <h3>{date}</h3>
        </div>
    );
}

export default Clock;
