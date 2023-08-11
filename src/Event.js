import React, { Component } from "react";

class Event extends Component {
    state = {
        showDetails: false
    };
    toggleDetails = (theState) => {
        this.setState({
            showDetails: !theState
        });
    };

    render() {
        const { event } = this.props;
        const { showDetails } = this.state;
        return (
            <div className="event">
                <h2 className="eventTitle">{event.summary}</h2>
                <p className="eventData"><span className="eventTime">{new Date(event.start.dateTime).toString()}</span><br />
                    &#64; {event.summary} &#124; <span className="eventPlace">{event.location}</span></p>
                {showDetails && (
                    <div className="eventDetails">
                        <h3>About Event</h3>
                        <a className="eventLink" href="{event.htmlLink}">See Details on Google Calendar</a>
                        <p className="eventDescription">{event.description}</p>
                    </div>
                )}
                <button className="toggleDetails" onClick={() => this.toggleDetails(showDetails)}>{showDetails ? "hide" : "show"} details</button>
            </div>
        );
    }
}
export default Event;