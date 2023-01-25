import React, {Component} from 'react';

class Clock extends Component {
    state = {date: new Date()}

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className='clock-wrapper'>
                <span>{this.state.date.toLocaleTimeString()}.</span>
            </div>
        );
    }
}




export default Clock;