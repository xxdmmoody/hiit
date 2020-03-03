import React from 'react';

class TimerDisplay extends React.Component {
    state = {
        timerText: '00h 00m 00s',
        intervalsCompleted: 0
    }
    renderTimer=()=>{
        return (
            <div>{this.state.timerText}</div>
        );
    }
    render(){
        return <div>{this.renderTimer()}</div>
    }
}

export default TimerDisplay;