import React, { Component } from 'react';
import { act } from '@testing-library/react';

class NumberOfEvents extends Component {
    state = {
        eventNumber: this.props.displayNum,
    }
    handleInputChanged = (event) => {
        const value = event.target.value;
        const infoAlert = 'errorAlert';
        this.props.updateEvents(value, this.props.location)
        act(() => this.setState({
            eventNumber: value,
        }));
        let infoText;
        if (value > 32 || value < 1 && value != '') {
            infoText = 'Select number between 1 and 32';
        } else {
            infoText = '';
        }
        this.props.setAlertText(infoText, infoAlert);
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