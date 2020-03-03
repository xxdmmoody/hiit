import React from 'react';
import TimerDisplay from './TimerDisplay';
import SetupPanel from './SetupPanel';

class App extends React.Component {

    render(){
        return (
            <div>
                <h2>HIIT Timer</h2>
                <SetupPanel />
                <TimerDisplay />
            </div>
        );
    }
    
}

export default App;