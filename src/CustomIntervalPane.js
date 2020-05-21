import React from 'react';

const CustomIntervalPane =()=>{
    return (
        <div className='custom-interval-pane'>
            <label>Duration of high intensity work (seconds)</label>
            <input className='interval-textbox'></input>
            <label>Duration of low intensity work (seconds)</label>
            <input className='interval-textbox'></input>
        </div>
    );
}

export default CustomIntervalPane;