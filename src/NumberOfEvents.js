import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventNumber: '32'
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            eventNumber: value
        });
    }
    render() {
        return (
            <div className="eventNumberBox">
                <input
                    type="number"
                    className="eventNumber"
                    value={this.state.eventNumber}
                    onChange={this.handleInputChanged}
                />
            </div>
        );
    }
}

export default NumberOfEvents;