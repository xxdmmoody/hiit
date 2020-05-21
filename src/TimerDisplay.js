import React from 'react';

class TimerDisplay extends React.Component {
    state = {
        timerText: '00m 00s',
        intervalsCompleted: 0
    }
    renderTimer=()=>{
        return (
            <div className='timer-display'>{this.state.timerText}</div>
        );
    }
    render(){
        return this.renderTimer();
    }
}

export default TimerDisplay;