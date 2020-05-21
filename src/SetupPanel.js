import React from 'react';
import CustomIntervalPane from './CustomIntervalPane';
import {EASY,MEDIUM,HARD,CUSTOM} from './UIConstants';

class SetupPanel extends React.Component {
    state={
        selectedInterval: EASY
    }
    
    selectChange=(evt)=>{
        console.log("changing selected interval to: " + evt.target.value);
        this.setState({selectedInterval: evt.target.value});
    }
    renderCustomIntervalPane(){
        if(this.state.selectedInterval===CUSTOM){
            console.log("rendering custom interval pane");
            return (
                <CustomIntervalPane />
            );
        }
        return null;
    }

    renderPanel=()=>{
        return (
            <div className='setup-panel'>
                <label>Select Interval (Low : High)</label>
                <select name="interval" onChange={this.selectChange}>
                    <option value={EASY}>{EASY}</option>
                    <option value={MEDIUM}>{MEDIUM}</option>
                    <option value={HARD}>{HARD}</option>
                    <option value={CUSTOM}>{CUSTOM}</option>

                </select>
                {this.renderCustomIntervalPane()}
                <button className='start-button'>Start</button>
            </div>
        );
    }
    render(){
        return (
            this.renderPanel()
        );
    }
}

export default SetupPanel;