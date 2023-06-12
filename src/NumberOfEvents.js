import React, { Component } from 'react';

class NumberOfEvents extends Component {
    state = {
        eventNumber: this.props.displayNum
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(value, this.props.location)
        this.setState({
            eventNumber: value
        });
    }
    render() {
        return (
            <div className="eventNumberBox">
                Display
                <input
                    type="number"
                    className="eventNumber"
                    value={this.state.eventNumber}
                    onChange={this.handleInputChanged}
                />
                events
            </div>
        );
    }
}

export default NumberOfEvents;