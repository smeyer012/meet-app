import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
    state = {
        eventNumber: this.props.displayNum,
        infoText: ''
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        this.props.updateEvents(value, this.props.location)
        this.setState({
            eventNumber: value,
            infoText: ''
        });
        if (value > 32 || value < 1 && value != '') {
            this.setState({
                infoText: 'Select number between 1 and 32',
            });
        } else {
            return this.setState({
                infoText: ''
            });
        }
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
                <ErrorAlert text={this.state.infoText} />
            </div>
        );
    }
}

export default NumberOfEvents;