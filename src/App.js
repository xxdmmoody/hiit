import React from 'react';
import TimerDisplay from './TimerDisplay';
import SetupPanel from './SetupPanel';
import './App.css'

class App extends React.Component {

    render(){
        return (
            <div className='main-window'>
                <h2>HIIT Timer</h2>
                <SetupPanel />
                <TimerDisplay />
            </div>
        );
    }
}

export default App;